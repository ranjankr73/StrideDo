import { configureStore } from '@reduxjs/toolkit';
import taskReducer from "../features/task/taskSlice";
import authReducer from "../features/user/authSlice";
export const store = configureStore({
  reducer: {
    task: taskReducer,
    auth: authReducer
  },
});
