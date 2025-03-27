import { create } from 'zustand';
import api from '../config/axiosConfig';

const useTaskStore = create((set, get) => ({
    tasks: [],
    selectedFilter: 'all',
    loading: false,
    error: null,

    // Derived state using get() instead of storing in state
    stats: () => {
        const now = new Date();
        const tasks = get().tasks;
        return {
            active: tasks.filter(t => !t.completed && new Date(t.dueDate) > now).length,
            completed: tasks.filter(t => t.completed).length,
            overdue: tasks.filter(t => !t.completed && new Date(t.dueDate) < now).length
        };
    },

    // Filtering function rather than storing filtered array
    setFilter: (filter) => set({ selectedFilter: filter }),

    getFilteredTasks: (filter) => {
        const now = new Date();
        const tasks = get().tasks;
        switch(filter) {
            case 'active': return tasks.filter(t => !t.completed && new Date(t.dueDate) > now);
            case 'completed': return tasks.filter(t => t.completed);
            case 'overdue': return tasks.filter(t => !t.completed && new Date(t.dueDate) < now);
            default: return tasks;
        }
    },

    // API operations
    getTasks: async () => {
        try {
            set({ loading: true, error: null });
            const response = await api.get('/task');
            set({ tasks: response.data.tasks, loading: false });
        } catch (error) {
            set({ 
                tasks: [], 
                error: error.response?.data?.message || 'Failed to fetch tasks',
                loading: false 
            });
        }
    },

    createTask: async (taskData) => {
        try {
            set({ loading: true, error: null });
            const response = await api.post('/task', taskData);
            set((state) => ({
                tasks: [...state.tasks, response.data.task],
                loading: false
            }));
        } catch (error) {
            set({ 
                error: error.response?.data?.message || 'Failed to create task',
                loading: false 
            });
        }
    },

    updateTask: async (taskId, taskData) => {
        try {
            set({ loading: true, error: null });
            const response = await api.put(`/task/${taskId}`, taskData);
            
            set((state) => ({
                tasks: state.tasks.map(task => 
                    task._id === taskId ? response.data.task : task
                ),
                loading: false
            }));

        } catch (error) {
            set({ 
                error: error.response?.data?.message || 'Failed to update task',
                loading: false 
            });
        }
    },

    toggleComplete: async (taskId, isCompleted) => {
        try {
            set({ loading: true, error: null });
            isCompleted = !isCompleted;
            const response = await api.put(`/task/${taskId}`, { isCompleted });
            
            set((state) => ({
                tasks: state.tasks.map(task => 
                    task._id === taskId ? response.data.task : task
                ),
                loading: false
            }));

        } catch (error) {
            set({ 
                error: error.response?.data?.message || 'Failed to update task',
                loading: false 
            });
        }
    },

    deleteTask: async (taskId) => {
        try {
            set({ loading: true, error: null });
            await api.delete(`/task/${taskId}`);
            
            set((state) => ({
                tasks: state.tasks.filter(task => task._id !== taskId),
                loading: false
            }));

        } catch (error) {
            set({ 
                error: error.response?.data?.message || 'Failed to delete task',
                loading: false 
            });
        }
    },
}));

export default useTaskStore;