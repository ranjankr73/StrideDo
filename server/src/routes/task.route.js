import express from "express";
import { getLoggedInUser } from "../middlewares/auth.middleware.js";
import { createTask, deleteTask, filterTasks, getTasks, updateTask, viewTask } from "../controllers/task.controller.js";

const router = express.Router();

router.post("/", getLoggedInUser, createTask);
router.get("/", getLoggedInUser, getTasks);
router.put("/:taskId", getLoggedInUser, updateTask);
router.delete("/:taskId", getLoggedInUser, deleteTask);

// Advanced features
router.get("/filter-tasks", getLoggedInUser, filterTasks);
router.get("/:taskId", getLoggedInUser, viewTask);

export default router;