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
            return true;
        } catch (error) {
            if (error.response?.status === 401) {
                const refreshed = await get().updateAccessToken();
                if (refreshed) {
                    return get().initializeAuth();
                }
            }
            set({ currentUser: null, loading: false, error: error?.response?.data?.message });
            return false;
        }
    },

    signup: async (userData) => {
        try {
            set({ loading: true, error: null });
            const response = await api.post('/user/signup', userData);
            set({ currentUser: response.data.user, loading: false });
            return true;
        } catch (error) {
            set({ currentUser: null, error: error?.response?.data?.message, loading: false });
            return false;
        }
    },

    signin: async (userData) => {
        try {
            set({ loading: true, error: null });
            const response = await api.post('/user/login', userData);
            set({ currentUser: response.data.user, loading: false });
            return true;
        } catch (error) {
            set({ currentUser: null, error: error?.response?.data?.message, loading: false });
            return false;
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
            return true;
        } catch (error) {
            set({ error: error?.response?.data?.message, loading: false });
            return false;
        }
    }
}));

export default useAuthStore;