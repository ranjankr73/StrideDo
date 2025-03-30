import axios from 'axios';

const api = axios.create({
  baseURL: "https://stride-do.vercel.app",
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});

export default api;