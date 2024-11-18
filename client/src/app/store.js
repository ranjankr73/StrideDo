import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { thunk } from "redux-thunk";
import taskReducer from "../features/task/taskSlice";
import authReducer from "../features/user/authSlice";

// Persist Configuration
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["task", "auth"],
};

// Combine Reducers
const rootReducer = combineReducers({
  task: taskReducer,
  auth: authReducer,
});

// Create a Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure Store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export const persistor = persistStore(store);
export default store;