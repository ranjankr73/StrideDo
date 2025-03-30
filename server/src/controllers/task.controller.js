import { User } from "../models/user.model.js";
import { Task } from "../models/task.model.js";

const createTask = async (req, res) => {
    try {
        const userId = req.user.userId;
        const { title, dueDate, priority, label, description, isCompleted } = req.body;

        if (!title || !dueDate) {
            return res.status(404).json({
                message: "Title and Due Date are required",
            });
        }

        const existedUser = await User.findById(userId);
        if (!existedUser) {
            return res.status(401).json({
                message: "User not found",
            });
        }

        const newTask = new Task({
            title,
            dueDate: new Date(dueDate),
            priority: priority || 'low',
            label,
            description,
            completed: isCompleted,
            createdBy: userId,
        });

        const savedTask = await newTask.save();
        
        return res.status(201).json({
            message: "Task created successfully",
            task: {
                title: savedTask.title,
                dueDate: savedTask.dueDate,
                priority: savedTask.priority,
                label: savedTask.label,
                description: savedTask.description,
                completed: savedTask.completed,
            },
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal server error while creating task",
        });
    }
};

const getTasks = async (req, res) => {
    try {
        const userId = req.user.userId;

        const existedUser = await User.findById(userId);

        if (!existedUser) {
            return res.status(401).json({
                message: "User does not exist",
            });
        }

        const tasks = await Task.find({ createdBy: userId });

        return res.status(200).json({
            message: "All the tasks fetched successfully",
            tasks: tasks,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error while fetching all the tasks",
        });
    }
};

const updateTask = async (req, res) => {
    try {
        const userId = req.user.userId;
        const taskId = req.params.taskId;

        const { title, dueDate, priority, label, description, isCompleted } = req.body;

        const existedUser = await User.findById(userId);
        if (!existedUser) {
            return res.status(401).json({
                message: "User not found",
            });
        }

        const existedTask = await Task.findByIdAndUpdate(
            taskId,
            {
                title: title,
                dueDate: dueDate,
                priority: priority,
                label: label,
                description: description,
                completed: isCompleted,
            },
            { new: true }
        );

        if (!existedTask) {
            res.status(401).json({
                message: "Task does not found",
            });
        }

        return res.status(201).json({
            message: "Task updated successfully",
            task: existedTask,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error while updating task",
        });
    }
};

const deleteTask = async (req, res) => {
    try {
        const userId = req.user.userId;
        const taskId = req.params.taskId;

        const existedUser = await User.findById(userId);
        if (!existedUser) {
            return res.status(401).json({
                message: "User does not exist",
            });
        }

        const task = await Task.findByIdAndDelete(taskId);
        if (!task) {
            return res.status(401).json({
                message: "Task does not found",
            });
        }

        return res.status(201).json({
            message: "Task deleted successfully",
            task: task._id,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error while deleting the task",
        });
    }
};

export { createTask, getTasks, updateTask, deleteTask };
