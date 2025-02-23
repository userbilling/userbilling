require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors");

const userRoutes = require("./routes/userRoutes");
const billRoutes = require("./routes/billRoutes");
const { getUsers } = require("./controllers/userController");

const app = express();

// ======== إعداد CORS ========
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
      "https://mary-project.vercel.app",
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// ======== Middleware ========
app.use(express.json());

// ======== Routes ========
app.use("/api/users", userRoutes);
app.use("/api/bills", billRoutes);

// ======== MongoDB Connection ========
const DB_URL = process.env.DB_URL;

mongoose
  .connect(DB_URL)
  .then(() => console.log("MongoDB connected successfully!"))
  .catch((error) => console.error("MongoDB connection failed:", error));

// ======== Start the server ========
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});