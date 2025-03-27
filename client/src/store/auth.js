import { create } from 'zustand';
import api from '../config/axiosConfig';

const useAuthStore = create((set) => ({
    currentUser: null,
    loading: false,
    error: null,

    initializeAuth: async () => {
        try {
            set({ loading: true, error: null });
            const response = await api.get('/user/me');
            set({ currentUser: response.data.user, loading: false });
        } catch (error) {
            set({ currentUser: null, loading: false, error: error?.response?.data?.message });
        }
    },

    signup: async (userData) => {
        try {
            set({ loading: true, error: null });
            const response = await api.post('/user/signup', userData);
            set({ currentUser: response.data.user, loading: false });
        } catch (error) {
            set({ currentUser: null, error: error.response.data.message, loading: false });
        }
    },

    signin: async (userData) => {
        try {
            set({ loading: true, error: null });
            const response = await api.post('/user/login', userData);
            set({ currentUser: response.data.user, loading: false });
        } catch (error) {
            set({ currentUser: null, error: error.response.data.message, loading: false });
        }
    },

    logout: async () => {
        try {
            set({ loading: true, error: null });
            const response = await api.post('/user/logout');
            set({ currentUser: null, loading: false });
        } catch (error) {
            set({ error: error.response.data.message, loading: false });
        }
    }
}));

export default useAuthStore;