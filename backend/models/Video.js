/* eslint-env node */
const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema(
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
      enum: ["school_tour", "general"],
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
      default: "videos",
    },
    active: {
      type: Boolean,
      default: true,
    },
    duration: {
      type: Number,
      default: 0,
    },
    size: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Video", videoSchema);
