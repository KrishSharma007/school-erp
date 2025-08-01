const express = require("express");
const router = express.Router();
const Notice = require("../models/Notice");
const auth = require("../middleware/auth");

// Get all active notices (public route)
router.get("/", async (req, res) => {
  try {
    const notices = await Notice.find({ active: true }).sort({ createdAt: -1 });
    res.json(notices);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all notices for admin (protected route)
router.get("/admin", auth, async (req, res) => {
  try {
    const notices = await Notice.find().sort({ createdAt: -1 });
    res.json(notices);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get notices by type (public route)
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

// Add new notice (protected route)
router.post("/", auth, async (req, res) => {
  try {
    const noticeData = req.body;
    const newNotice = new Notice(noticeData);
    const savedNotice = await newNotice.save();
    res.status(201).json(savedNotice);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update notice (protected route)
router.patch("/:id", auth, async (req, res) => {
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

// Delete notice (protected route)
router.delete("/:id", auth, async (req, res) => {
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

// Toggle notice active status (protected route)
router.patch("/:id/toggle", auth, async (req, res) => {
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
