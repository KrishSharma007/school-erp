/* eslint-env node */
const mongoose = require("mongoose");

const admissionSettingsSchema = new mongoose.Schema(
  {
    isAdmissionOpen: {
      type: Boolean,
      default: false,
    },
    admissionSession: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("AdmissionSettings", admissionSettingsSchema);
