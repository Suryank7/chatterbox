import express from "express";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";
import mongoose from "mongoose";
import "dotenv/config";
import userRouter from "./routes/userRoutes.js";
import messageRouter from "./routes/messageRoutes.js";
import { app, server } from "./lib/socket.js";

import { connectDB } from "./lib/db.js";

try {
  console.log("Connecting...");

  await connectDB();

  console.log("✅ MongoDB Connected Successfully");

  process.exit(0);
} catch (error) {
  console.error("❌ Connection Failed");
  console.error(error);

  process.exit(1);
}
