import express from 'express';
import cookieParser from "cookie-parser";
import dotenv from 'dotenv';
import cors from "cors";
import { connectDB } from './db/connectDB.js';

import authRoutes from "./routes/auth.route.js";
import goalRoutes from './routes/goal.routes.js';
import todayRoutes from "./routes/today.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.set("trust proxy", 1);

app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin: ["http://localhost:5173",
                "https://taskilo-wheat.vercel.app"
        ],
        credentials: true,
    })
);

app.use("/api/auth", authRoutes);
app.use("/api/goals", goalRoutes);
app.use("/api/today", todayRoutes);

app.listen(PORT, () => {
    connectDB();
    console.log("Server is running on port ", PORT);

});