const express = require("express");
const router = express.Router();
const SlideshowImage = require("../models/SlideshowImage");
const cloudinary = require("cloudinary").v2;
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
const auth = require("../middleware/auth");
require("dotenv").config({
  path: require("path").resolve(__dirname, "../config.env"),
});

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Get all active slideshow images (public route)
router.get("/", async (req, res) => {
  try {
    const images = await SlideshowImage.find({ active: true }).sort({
      order: 1,
      createdAt: -1,
    });
    res.json(images);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add new slideshow image (protected route)
router.post("/", auth, upload.single("file"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No image file provided" });
    }
    // Upload to Cloudinary
    const stream = cloudinary.uploader.upload_stream(
      {
        folder: "school_erp/slideshow",
        resource_type: "image",
        // Image compression settings for balanced quality and size
        quality: "auto:good",
        fetch_format: "auto",
        width: 1920,
        height: 1080,
        crop: "limit",
      },
      async (error, result) => {
        if (error) {
          console.error("Cloudinary upload error:", error);
          return res.status(502).json({
            error: "Failed to upload image to Cloudinary",
            details: error.message,
          });
        }
        // Save to MongoDB
        const imageData = {
          ...req.body,
          url: result.secure_url,
          public_id: result.public_id,
          folder: result.folder,
          width: result.width,
          height: result.height,
          category: "slideshow", // Force category to slideshow
        };
        try {
          const newImage = new SlideshowImage(imageData);
          const savedImage = await newImage.save();
          return res.status(201).json(savedImage);
        } catch (dbErr) {
          console.error("Slideshow image creation error:", dbErr);
          return res.status(400).json({ error: dbErr.message });
        }
      }
    );
    stream.end(req.file.buffer);
  } catch (error) {
    console.error("Slideshow image creation error:", error);
    res.status(400).json({ error: error.message });
  }
});

// Update slideshow image (protected route)
router.patch("/:id", auth, async (req, res) => {
  try {
    const { id } = req.params;
    const { file, ...updates } = req.body;
    const image = await SlideshowImage.findById(id);
    if (!image) {
      return res.status(404).json({ error: "Image not found" });
    }
    // If a new file is provided, replace on Cloudinary
    if (file) {
      // Delete old file from Cloudinary
      try {
        await cloudinary.uploader.destroy(image.public_id, {
          resource_type: "image",
        });
      } catch (cloudErr) {
        console.error("Cloudinary deletion error:", cloudErr);
        return res.status(502).json({
          error: "Failed to delete old image from Cloudinary",
          details: cloudErr.message,
        });
      }
      // Upload new file to Cloudinary
      let uploadResult;
      try {
        uploadResult = await cloudinary.uploader.upload(file, {
          folder: "school_erp/slideshow",
          resource_type: "image",
        });
      } catch (cloudErr) {
        console.error("Cloudinary upload error:", cloudErr);
        return res.status(502).json({
          error: "Failed to upload new image to Cloudinary",
          details: cloudErr.message,
        });
      }
      // Update MongoDB with new file info and metadata
      updates.url = uploadResult.secure_url;
      updates.public_id = uploadResult.public_id;
      updates.folder = uploadResult.folder;
      updates.width = uploadResult.width;
      updates.height = uploadResult.height;
    }
    // Update MongoDB (either just metadata or with new file info)
    const updatedImage = await SlideshowImage.findByIdAndUpdate(id, updates, {
      new: true,
    });
    res.json(updatedImage);
  } catch (error) {
    console.error("Slideshow image update error:", error);
    res.status(400).json({ error: error.message });
  }
});

// Delete slideshow image (protected route)
router.delete("/:id", auth, async (req, res) => {
  try {
    const { id } = req.params;
    const image = await SlideshowImage.findById(id);
    if (!image) {
      return res.status(404).json({ error: "Image not found" });
    }
    // Delete from Cloudinary
    try {
      const result = await cloudinary.uploader.destroy(image.public_id, {
        resource_type: "image",
      });
      if (result.result !== "ok" && result.result !== "not found") {
        return res.status(502).json({
          error: "Failed to delete image from Cloudinary",
          details: result,
        });
      }
    } catch (cloudErr) {
      console.error("Cloudinary deletion error:", cloudErr);
      return res.status(502).json({
        error: "Failed to delete image from Cloudinary",
        details: cloudErr.message,
      });
    }
    // Only delete from MongoDB if Cloudinary succeeded
    await SlideshowImage.findByIdAndDelete(id);
    res.json({ message: "Image deleted successfully" });
  } catch (error) {
    console.error("Slideshow image deletion error:", error);
    res.status(500).json({ error: error.message });
  }
});

// Toggle image active status (protected route)
router.patch("/:id/toggle", auth, async (req, res) => {
  try {
    const { id } = req.params;
    const image = await SlideshowImage.findById(id);
    if (!image) {
      return res.status(404).json({ error: "Image not found" });
    }
    image.active = !image.active;
    const updatedImage = await image.save();
    res.json(updatedImage);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
