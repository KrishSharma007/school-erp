/* eslint-env node */
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config({ path: "./config.env" });

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Import routes
const galleryRoutes = require("./routes/gallery");
const slideshowRoutes = require("./routes/slideshow");
const noticesRoutes = require("./routes/notices");
const admissionRoutes = require("./routes/admission");
const videoRoutes = require("./routes/videos");

// API Routes
app.use("/api/gallery", galleryRoutes);
app.use("/api/slideshow", slideshowRoutes);
app.use("/api/notices", noticesRoutes);
app.use("/api/admission", admissionRoutes);
app.use("/api/videos", videoRoutes);

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", message: "Server is running" });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
