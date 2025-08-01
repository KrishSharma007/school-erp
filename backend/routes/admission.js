/* eslint-env node */
const express = require("express");
const router = express.Router();
const AdmissionSettings = require("../models/AdmissionSettings");
const auth = require("../middleware/auth");

// Get admission settings (public route)
router.get("/", async (req, res) => {
  try {
    let settings = await AdmissionSettings.findOne();
    if (!settings) {
      // Create default settings if none exist
      settings = new AdmissionSettings({
        isAdmissionOpen: false,
        admissionSession: "",
      });
      await settings.save();
    }
    res.json(settings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update admission settings (protected route)
router.patch("/", auth, async (req, res) => {
  try {
    const { isAdmissionOpen, admissionSession } = req.body;
    let settings = await AdmissionSettings.findOne();

    if (!settings) {
      settings = new AdmissionSettings();
    }

    settings.isAdmissionOpen = isAdmissionOpen;
    settings.admissionSession = admissionSession;

    const updatedSettings = await settings.save();
    res.json(updatedSettings);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
