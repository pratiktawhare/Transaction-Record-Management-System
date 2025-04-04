import express from "express";
import cors from "cors";
import { connectDB } from "./DB/Database.js";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import transactionRoutes from "./Routers/Transactions.js";
import userRoutes from "./Routers/userRouter.js";

dotenv.config({ path: "./config/config.env" });
const app = express();

// Database connection
connectDB();

// Middleware - simplified configuration
app.use(express.json());
app.use(cors({
  origin: ["http://localhost:3000"],
  credentials: true
}));
app.use(helmet());
app.use(morgan("dev"));

// Routes
app.use("/", userRoutes);
app.use("/api/transactions", transactionRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
