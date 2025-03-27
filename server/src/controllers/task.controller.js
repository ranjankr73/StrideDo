import { User } from "../models/user.model.js";
import { Task } from "../models/task.model.js";

const createTask = async (req, res) => {
    try {
        const userId = req.user.userId;
        const { title, dueDate, priority, description, isCompleted } = req.body;

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

        const { title, dueDate, priority, description, isCompleted } = req.body;

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

// Advanced Features
const filterTasks = async (req, res) => {
    try {
        const userId = req.user.userId;
        const { filter } = req.body;

        const existedUser = await User.findById(userId);
        if (!existedUser) {
            return res.status(404).json({
                msg: "User does not exist",
            });
        }

        let tasks;
        if (filter === "Completed") {
            tasks = await Task.find({ createdBy: userId, status: "Completed" });
        } else if (filter === "Pending") {
            tasks = await Task.find({ createdBy: userId, status: "Pending" });
        } else if (filter === "High") {
            tasks = await Task.find({ createdBy: userId, priority: "High" });
        } else if (filter === "Medium") {
            tasks = await Task.find({ createdBy: userId, priority: "Medium" });
        } else if (filter === "Low") {
            tasks = await Task.find({ createdBy: userId, priority: "Low" });
        } else {
            tasks = await Task.find({ createdBy: userId, dueDate: filter });
        }

        return res.status(201).json({
            msg: "Tasks fetched successfully",
            data: tasks,
        });
    } catch (error) {
        return res.status(501).json({
            msg: "Internal server error while fetching tasks with filter",
        });
    }
};

const viewTask = async (req, res) => {
    try {
        const userId = req.user.userId;
        const taskId = req.params.taskId;

        const existedUser = await User.findById(userId);
        if (!existedUser) {
            return res.status(404).json({
                msg: "User does not exist",
            });
        }

        const existedTask = await Task.findById(taskId);
        if (!existedTask) {
            return res.status(404).json({
                msg: "Task does not found",
            });
        }

        return res.status(201).json({
            msg: "Task fetched successfully",
            data: existedTask,
        });
    } catch (error) {
        return res.status(500).json({
            msg: "Internal server error while fetching a task",
        });
    }
};

export { createTask, getTasks, updateTask, deleteTask, filterTasks, viewTask };
