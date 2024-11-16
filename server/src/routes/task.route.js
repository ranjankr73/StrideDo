import express from "express";
import { getLoggedInUser } from "../middlewares/auth.middleware.js";
import { createTask, deleteTask, filterTasks, getTasks, updateTask, viewTask } from "../controllers/task/task.controller.js";

const router = express.Router();

router.post("/create-task", getLoggedInUser, createTask);
router.put("/:taskId", getLoggedInUser, updateTask);
router.delete("/:taskId", getLoggedInUser, deleteTask);
router.get("/all-tasks", getLoggedInUser, getTasks);
router.get("/filter-tasks", getLoggedInUser, filterTasks);
router.get("/:taskId", getLoggedInUser, viewTask);

export default router;