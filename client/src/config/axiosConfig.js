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
      
      if ((error.response.status === 404 || error.response.status === 401) && !originalRequest._retry) {
        originalRequest._retry = true;
        
        await useAuthStore.getState().updateAccessToken();
        
        return api(originalRequest);
      }
      return Promise.reject(error);
    }
  );

export default api;