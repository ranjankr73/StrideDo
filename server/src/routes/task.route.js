import express from "express";
import { getLoggedInUser } from "../middlewares/auth.middleware.js";
import { createTask, deleteTask, getTasks, updateTask } from "../controllers/task.controller.js";

const router = express.Router();

router.post("/", getLoggedInUser, createTask);
router.get("/", getLoggedInUser, getTasks);
router.put("/:taskId", getLoggedInUser, updateTask);
router.delete("/:taskId", getLoggedInUser, deleteTask);

export default router;