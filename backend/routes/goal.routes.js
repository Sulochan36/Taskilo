import express from "express";
import { createGoal, deleteGoal, getGoalById, getGoals, updateGoal, updateTaskDone } from "../controllers/goal.controller.js";
import { protectRoute } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/", protectRoute, createGoal); // POST /api/goals
router.get('/', protectRoute, getGoals);
router.delete('/:id', protectRoute, deleteGoal);
router.put('/:id', protectRoute, updateGoal);
router.get('/:id', protectRoute, getGoalById);
router.patch("/:goalId/tasks/:taskId", protectRoute, updateTaskDone);

export default router;