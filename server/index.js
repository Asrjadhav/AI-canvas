import * as dotenv from "dotenv";
// Load environment variables
dotenv.config();
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import PostRouter from "./routes/Posts.js";
import GenerateImageRouter from "./routes/GenerateImage.js";



// Initialize the app
const app = express();

// Middleware setup
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));

// Error handler
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong!";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

// Use routes
app.use("/api/post", PostRouter);
app.use("/api/generateImage", GenerateImageRouter);

// Default route
app.get("/", async (req, res) => {
  res.status(200).json({
    message: "Hello GFG Developers!",
  });
});

// Function to connect to MongoDB
const connectDB = () => {
  mongoose.set("strictQuery", true);
  console.log("MongoDB URL:", process.env.MONGODB_URL);
  mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => {
      console.error("Failed to connect to DB");
      console.error(err);
    });
};

// Function to start the server
const startServer = async () => {
  try {
    // Connect to DB
    connectDB();
    
    // Get the port from environment variable or use 8080 if not set
    const PORT = process.env.PORT || 8080;
    
    // Start the server
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

// Start the server
startServer();
