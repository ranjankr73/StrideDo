import { create } from 'zustand';
import api from '../config/axiosConfig';

const useAuthStore = create((set, get) => ({
    currentUser: null,
    loading: false,
    error: null,

    initializeAuth: async () => {
        try {
            set({ loading: true, error: null });
            const response = await api.get('/user/me');
            set({ currentUser: response.data.user, loading: false });
        } catch (error) {
            if (error.response?.status === 401) {
                const refreshed = await get().updateAccessToken();
                if (refreshed) {
                    return get().initializeAuth();
                }
            }
            set({ currentUser: null, loading: false, error: error?.response?.data?.message });
        }
    },

    signup: async (userData) => {
        try {
            set({ loading: true, error: null });
            const response = await api.post('/user/signup', userData);
            set({ currentUser: response.data.user, loading: false });
        } catch (error) {
            set({ currentUser: null, error: error?.response?.data?.message, loading: false });
        }
    },

    signin: async (userData) => {
        try {
            set({ loading: true, error: null });
            const response = await api.post('/user/login', userData);
            set({ currentUser: response.data.user, loading: false });
        } catch (error) {
            set({ currentUser: null, error: error?.response?.data?.message, loading: false });
        }
    },

    updateAccessToken: async () => {
        try {
            set({ loading: true, error: null });
            await api.post('/user/refresh-token');
            set({ loading: false });
            return true;
        } catch (error) {
            console.error("Failed to refresh token:", error?.response?.data?.message);
            set({ loading: false, error: error?.response?.data?.message });
            return false;
        }
    },

    logout: async () => {
        try {
            set({ loading: true, error: null });
            await api.post('/user/logout');
            set({ currentUser: null, loading: false });
        } catch (error) {
            set({ error: error?.response?.data?.message, loading: false });
        }
    }
}));

export default useAuthStore;