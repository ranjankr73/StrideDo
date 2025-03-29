import { create } from "zustand";
import api from "../config/axiosConfig";

const useTaskStore = create((set, get) => ({
  tasks: [],
  tasksToDisplay: "all",
  searchItem: "",
  loading: false,
  error: null,

  // API operations
  getTasks: async () => {
    try {
      set({ loading: true, error: null });
      const response = await api.get("/task");
      set({ tasks: response.data.tasks, loading: false });
    } catch (error) {
      set({
        tasks: [],
        error: error.response?.data?.message || "Failed to fetch tasks",
        loading: false,
      });
    }
  },

  createTask: async (taskData) => {
    try {
      set({ loading: true, error: null });
      const response = await api.post("/task", taskData);
      set((state) => ({
        tasks: [...state.tasks, response.data.task],
        loading: false,
      }));
      await get().getTasks();
      return true;
    } catch (error) {
      set({
        error: error.response?.data?.message || "Failed to create task",
        loading: false,
      });
      return false;
    }
  },

  updateTask: async (taskId, taskData) => {
    try {
      set({ loading: true, error: null });
      const response = await api.put(`/task/${taskId}`, taskData);

      set((state) => ({
        tasks: state.tasks.map((task) =>
          task._id === taskId ? response.data.task : task
        ),
        loading: false,
      }));
      return true;
    } catch (error) {
      set({
        error: error.response?.data?.message || "Failed to update task",
        loading: false,
      });
      return false;
    }
  },

  toggleComplete: async (taskId, isCompleted) => {
    try {
      set({ loading: true, error: null });
      isCompleted = !isCompleted;
      const response = await api.put(`/task/${taskId}`, { isCompleted });

      set((state) => ({
        tasks: state.tasks.map((task) =>
          task._id === taskId ? response.data.task : task
        ),
        loading: false,
      }));
    } catch (error) {
      set({
        error: error.response?.data?.message || "Failed to update task",
        loading: false,
      });
    }
  },

  deleteTask: async (taskId) => {
    try {
      set({ loading: true, error: null });
      await api.delete(`/task/${taskId}`);

      set((state) => ({
        tasks: state.tasks.filter((task) => task._id !== taskId),
        loading: false,
      }));
      return true;
    } catch (error) {
      set({
        error: error.response?.data?.message || "Failed to delete task",
        loading: false,
      });
      return false;
    }
  },

  //Statistics
  stats: () => {
    const now = new Date();
    const tasks = get().tasks;
    return {
      active: tasks.filter((t) => !t.completed && new Date(t.dueDate) > now)
        .length,
      completed: tasks.filter((t) => t.completed).length,
      overdue: tasks.filter((t) => !t.completed && new Date(t.dueDate) < now)
        .length,
    };
  },

  //Filter to show on Task List
  setFilter: (filter) => set({ tasksToDisplay: filter }),

  getFilteredTasks: (filter) => {
    const now = new Date();
    const tasks = get().tasks;
    switch (filter) {
      case "active":
        return tasks.filter((t) => !t.completed && new Date(t.dueDate) > now);
      case "completed":
        return tasks.filter((t) => t.completed);
      case "overdue":
        return tasks.filter((t) => !t.completed && new Date(t.dueDate) < now);
      case "high":
        return tasks.filter((t) => t.priority === "high");
      case "medium":
        return tasks.filter((t) => t.priority === "medium");
      case "low":
        return tasks.filter((t) => t.priority === "low");
      case "dueDate-asc":
        return [...tasks].sort(
          (a, b) => new Date(a.dueDate) - new Date(b.dueDate)
        );
      case "dueDate-desc":
        return [...tasks].sort(
          (a, b) => new Date(b.dueDate) - new Date(a.dueDate)
        );
      case "priority-desc":
        return [
          ...tasks.filter((t) => t.priority === "high"),
          ...tasks.filter((t) => t.priority === "medium"),
          ...tasks.filter((t) => t.priority === "low"),
        ];
      case "createdAt-desc":
        return [...tasks].reverse();
      default:
        return tasks;
    }
  },

  setSearch: (input) => set({ searchItem: input.toLowerCase() }),

  searchTasks: (input) => {
    const tasks = get().tasks;
    return [
      ...tasks.filter(
        (t) => t.title.toLowerCase().includes(input) || t.description.toLowerCase().includes(input)
      ),
    ];
  },
}));

export default useTaskStore;
