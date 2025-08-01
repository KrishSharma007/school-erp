/* eslint-env node */
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5001;
const NODE_ENV = process.env.NODE_ENV || "development";

// Security middleware
app.use(helmet());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP, please try again later."
});
app.use("/api/", limiter);

// CORS configuration
const corsOptions = {
  origin: NODE_ENV === "production" 
    ? process.env.CORS_ORIGIN || "https://your-domain.com"
    : "http://localhost:5173",
  credentials: true,
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// Body parsing middleware
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
  })
  .then(() => {
    if (NODE_ENV === "development") {
      console.log("Connected to MongoDB");
    }
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });

// Routes
const authRoutes = require("./routes/auth");
const galleryRoutes = require("./routes/gallery");
const slideshowRoutes = require("./routes/slideshow");
const noticesRoutes = require("./routes/notices");
const videosRoutes = require("./routes/videos");
const admissionRoutes = require("./routes/admission");
const messagesRoutes = require("./routes/messages");

app.use("/api/auth", authRoutes);
app.use("/api/gallery", galleryRoutes);
app.use("/api/slideshow", slideshowRoutes);
app.use("/api/notices", noticesRoutes);
app.use("/api/videos", videosRoutes);
app.use("/api/admission", admissionRoutes);
app.use("/api/messages", messagesRoutes);

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ 
    status: "OK", 
    message: "Server is running",
    environment: NODE_ENV,
    timestamp: new Date().toISOString()
  });
});

// 404 handler
app.use("*", (req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Global error handling middleware
app.use((err, req, res, next) => {
  const errorMessage = NODE_ENV === "production" 
    ? "Something went wrong!" 
    : err.message;
  
  console.error("Error:", {
    message: err.message,
    stack: err.stack,
    url: req.url,
    method: req.method,
    timestamp: new Date().toISOString()
  });
  
  res.status(err.status || 500).json({ 
    error: errorMessage,
    ...(NODE_ENV === "development" && { stack: err.stack })
  });
});

// Graceful shutdown
process.on("SIGTERM", () => {
  console.log("SIGTERM received, shutting down gracefully");
  mongoose.connection.close(() => {
    console.log("MongoDB connection closed");
    process.exit(0);
  });
});

process.on("SIGINT", () => {
  console.log("SIGINT received, shutting down gracefully");
  mongoose.connection.close(() => {
    console.log("MongoDB connection closed");
    process.exit(0);
  });
});

// Start server
const server = app.listen(PORT, () => {
  if (NODE_ENV === "development") {
    console.log(`Server running on port ${PORT} in ${NODE_ENV} mode`);
  }
});

// Handle server errors
server.on("error", (error) => {
  if (error.syscall !== "listen") {
    throw error;
  }
  
  const bind = typeof PORT === "string" ? "Pipe " + PORT : "Port " + PORT;
  
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
});

module.exports = app;
