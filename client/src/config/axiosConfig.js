import axios from 'axios';
import useAuthStore from '../store/auth';

const api = axios.create({
  baseURL: 'http://localhost:8000/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true
});

api.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;
    
    if (error.response?.status === 401 && 
        !originalRequest._retry &&
        !originalRequest.url.includes('/refresh-token')) {
      
      originalRequest._retry = true;
      
      try {
        // Check for refresh token existence before attempting refresh
        const hasRefreshToken = document.cookie
          .split('; ')
          .some(row => row.startsWith('refreshToken='));

        if (!hasRefreshToken) {
          throw new Error('No refresh token available');
        }

        await useAuthStore.getState().updateAccessToken();
        return api(originalRequest);
      } catch (refreshError) {
        // Clear auth state on refresh failure
        useAuthStore.getState().logout();
        window.location.href = '/signin';
        return Promise.reject(refreshError);
      }
    }
    
    return Promise.reject(error);
  }
);

export default api;