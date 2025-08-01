/* eslint-env node */
const express = require("express");
const router = express.Router();
const Video = require("../models/Video");
const cloudinary = require("cloudinary").v2;
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
require("dotenv").config({
  path: require("path").resolve(__dirname, "../config.env"),
});

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Get all videos
router.get("/", async (req, res) => {
  try {
    const videos = await Video.find({ active: true }).sort({ createdAt: -1 });
    res.json(videos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get videos by category
router.get("/category/:category", async (req, res) => {
  try {
    const { category } = req.params;
    const videos = await Video.find({
      category,
      active: true,
    }).sort({ createdAt: -1 });
    res.json(videos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add new video (transactional, with multer)
router.post("/", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No video file provided" });
    }
    // Upload to Cloudinary
    const stream = cloudinary.uploader.upload_stream(
      {
        folder: "school_erp/videos",
        resource_type: "video",
        // Video compression settings for balanced quality and size
        quality: "auto:good",
        fetch_format: "auto",
        video_codec: "auto",
        bit_rate: "1000k",
        duration: "60",
        width: 1920,
        height: 1080,
        crop: "limit",
      },
      async (error, result) => {
        if (error) {
          console.error("Cloudinary upload error:", error);
          return res.status(502).json({
            error: "Failed to upload video to Cloudinary",
            details: error.message,
          });
        }
        // Save to MongoDB
        const videoData = {
          ...req.body,
          url: result.secure_url,
          public_id: result.public_id,
          folder: result.folder,
          duration: result.duration,
          size: result.bytes,
        };
        try {
          const newVideo = new Video(videoData);
          const savedVideo = await newVideo.save();
          return res.status(201).json(savedVideo);
        } catch (dbErr) {
          console.error("Video creation error:", dbErr);
          return res.status(400).json({ error: dbErr.message });
        }
      }
    );
    stream.end(req.file.buffer);
  } catch (error) {
    console.error("Video creation error:", error);
    res.status(400).json({ error: error.message });
  }
});

// Update video (transactional, with multer)
router.patch("/:id", upload.single("file"), async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const video = await Video.findById(id);
    if (!video) {
      return res.status(404).json({ error: "Video not found" });
    }
    // If a new file is provided, replace on Cloudinary
    if (req.file) {
      // Delete old file from Cloudinary
      try {
        await cloudinary.uploader.destroy(video.public_id, {
          resource_type: "video",
        });
      } catch (cloudErr) {
        console.error("Cloudinary deletion error:", cloudErr);
        return res.status(502).json({
          error: "Failed to delete old video from Cloudinary",
          details: cloudErr.message,
        });
      }
      // Upload new file to Cloudinary
      const stream = cloudinary.uploader.upload_stream(
        {
          folder: "school_erp/videos",
          resource_type: "video",
          // Video compression settings for balanced quality and size
          quality: "auto:good",
          fetch_format: "auto",
          video_codec: "auto",
          bit_rate: "1000k",
          duration: "60",
          width: 1920,
          height: 1080,
          crop: "limit",
        },
        async (error, result) => {
          if (error) {
            console.error("Cloudinary upload error:", error);
            return res.status(502).json({
              error: "Failed to upload new video to Cloudinary",
              details: error.message,
            });
          }
          // Update MongoDB with new file info and metadata
          updates.url = result.secure_url;
          updates.public_id = result.public_id;
          updates.folder = result.folder;
          updates.duration = result.duration;
          updates.size = result.bytes;
          try {
            const updatedVideo = await Video.findByIdAndUpdate(id, updates, {
              new: true,
            });
            return res.json(updatedVideo);
          } catch (dbErr) {
            console.error("Video update error:", dbErr);
            return res.status(400).json({ error: dbErr.message });
          }
        }
      );
      stream.end(req.file.buffer);
      return; // Response is sent in the callback above
    } else {
      // Only metadata update
      const updatedVideo = await Video.findByIdAndUpdate(id, updates, {
        new: true,
      });
      return res.json(updatedVideo);
    }
  } catch (error) {
    console.error("Video update error:", error);
    res.status(400).json({ error: error.message });
  }
});

// Delete video (from both MongoDB and Cloudinary)
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const video = await Video.findById(id);
    if (!video) {
      return res.status(404).json({ error: "Video not found" });
    }
    // Delete from Cloudinary
    try {
      const result = await cloudinary.uploader.destroy(video.public_id, {
        resource_type: "video",
      });
      if (result.result !== "ok" && result.result !== "not found") {
        return res.status(502).json({
          error: "Failed to delete video from Cloudinary",
          details: result,
        });
      }
    } catch (cloudErr) {
      console.error("Cloudinary deletion error:", cloudErr);
      return res.status(502).json({
        error: "Failed to delete video from Cloudinary",
        details: cloudErr.message,
      });
    }
    // Only delete from MongoDB if Cloudinary succeeded
    await Video.findByIdAndDelete(id);
    res.json({ message: "Video deleted successfully" });
  } catch (error) {
    console.error("Video deletion error:", error);
    res.status(500).json({ error: error.message });
  }
});

// Batch delete endpoint
router.post("/batch-delete", async (req, res) => {
  const { ids } = req.body; // expects { ids: [id1, id2, ...] }
  if (!Array.isArray(ids) || ids.length === 0) {
    return res.status(400).json({ error: "No video IDs provided" });
  }
  const results = [];
  for (const id of ids) {
    try {
      const video = await Video.findById(id);
      if (!video) {
        results.push({ id, status: "not_found" });
        continue;
      }
      // Delete from Cloudinary
      try {
        const result = await cloudinary.uploader.destroy(video.public_id, {
          resource_type: "video",
        });
        if (result.result !== "ok" && result.result !== "not found") {
          results.push({ id, status: "cloudinary_error", error: result });
          continue;
        }
      } catch (cloudErr) {
        results.push({
          id,
          status: "cloudinary_error",
          error: cloudErr.message,
        });
        continue;
      }
      // Only delete from MongoDB if Cloudinary succeeded
      await Video.findByIdAndDelete(id);
      results.push({ id, status: "deleted" });
    } catch (error) {
      results.push({ id, status: "error", error: error.message });
    }
  }
  res.json({ results });
});

// Toggle video active status
router.patch("/:id/toggle", async (req, res) => {
  try {
    const { id } = req.params;
    const video = await Video.findById(id);
    if (!video) {
      return res.status(404).json({ error: "Video not found" });
    }
    video.active = !video.active;
    const updatedVideo = await video.save();
    res.json(updatedVideo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
