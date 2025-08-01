/* eslint-env node */
const mongoose = require("mongoose");

const galleryImageSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "",
    },
    category: {
      type: String,
      enum: [
        "events",
        "students",
        "facilities",
        "sports",
        "general",
        "gallery",
        "slideshow",
        "notices",
      ],
      default: "general",
    },
    date: {
      type: String,
      required: true,
    },
    public_id: {
      type: String,
      required: true,
    },
    folder: {
      type: String,
      default: "gallery",
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("GalleryImage", galleryImageSchema);
