const mongoose = require("mongoose");

const noticeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    image: {
      url: String,
      public_id: String,
    },
    date: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: [
        "general",
        "admission",
        "event",
        "academic",
        "sports",
        "meeting",
        "exam",
        "holiday",
        "announcement",
      ],
      default: "general",
    },
    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "medium",
    },
    active: {
      type: Boolean,
      default: true,
    },
    author: {
      type: String,
      default: "Admin",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Notice", noticeSchema);
