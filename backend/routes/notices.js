const express = require("express");
const router = express.Router();
const Notice = require("../models/Notice");

// Get all active notices
router.get("/", async (req, res) => {
  try {
    const notices = await Notice.find({ active: true }).sort({ createdAt: -1 });
    res.json(notices);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get notices by type
router.get("/type/:type", async (req, res) => {
  try {
    const { type } = req.params;
    const notices = await Notice.find({
      type,
      active: true,
    }).sort({ createdAt: -1 });
    res.json(notices);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add new notice
router.post("/", async (req, res) => {
  try {
    const noticeData = req.body;
    const newNotice = new Notice(noticeData);
    const savedNotice = await newNotice.save();
    res.status(201).json(savedNotice);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update notice
router.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const updatedNotice = await Notice.findByIdAndUpdate(id, updates, {
      new: true,
    });
    if (!updatedNotice) {
      return res.status(404).json({ error: "Notice not found" });
    }
    res.json(updatedNotice);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete notice
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedNotice = await Notice.findByIdAndDelete(id);
    if (!deletedNotice) {
      return res.status(404).json({ error: "Notice not found" });
    }
    res.json({ message: "Notice deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Toggle notice active status
router.patch("/:id/toggle", async (req, res) => {
  try {
    const { id } = req.params;
    const notice = await Notice.findById(id);
    if (!notice) {
      return res.status(404).json({ error: "Notice not found" });
    }
    notice.active = !notice.active;
    const updatedNotice = await notice.save();
    res.json(updatedNotice);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
