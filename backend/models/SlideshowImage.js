const mongoose = require("mongoose");

const slideshowImageSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    category: {
      type: String,
      enum: [
        "general",
        "events",
        "academic",
        "slideshow",
        "gallery",
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
      default: "slideshow",
    },
    active: {
      type: Boolean,
      default: true,
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("SlideshowImage", slideshowImageSchema);
