import express from "express";
import bodyParser from "body-parser";
import { productRoutes, orderRoutes } from "./routes";
import connectDB from "./utils/db";

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api", productRoutes);
app.use("/api", orderRoutes);

// Connect to DB
connectDB();

export default app;
