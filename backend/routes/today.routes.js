import express from "express";
import { protectRoute } from "../middlewares/auth.middleware.js";
import { addToToday, getTodayTasks, removeFromToday } from "../controllers/todaytodo.controller.js";

const router = express.Router();

router.get("/", protectRoute, getTodayTasks);
router.post("/add", protectRoute, addToToday);
router.post("/remove", protectRoute, removeFromToday);

export default router;
