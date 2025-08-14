import cors from "cors";
import "dotenv/config";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { connectDB } from "./config/db.js";
import cartRouter from "./routes/cartRoute.js";
import foodRouter from "./routes/foodRoute.js";
import orderRouter from "./routes/orderRoute.js";
import userRouter from "./routes/userRoute.js";

const app = express();
const port = process.env.PORT || 4000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors());
app.use(express.json()); // body-parser for JSON
app.use(express.urlencoded({ extended: true })); // ⬅️ This is needed for form-data parsing

// Serve uploads statically
app.use("/uploads", express.static("uploads"));

// MongoDB
connectDB();

// Routes
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order/", orderRouter);

// Test route
app.get("/", (req, res) => {
  res.send("API running");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
