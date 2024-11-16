import { toast } from "react-hot-toast";
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from "../../config/axiosConfig.js";

export const signupUser = createAsyncThunk(
    'auth/signupUser',
    async (userDetails, thunkAPI) => {
        try {
            const response = await api.post('/auth/create-account', userDetails);
            toast.success(response.data.msg);
            return response.data;
        } catch (error) {
            toast.error(error.response.data.msg);
            return thunkAPI.rejectWithValue(
                error.response?.data?.msg
            );
        }
    }
);

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async (userDetails, thunkAPI) => {
        try {
            const response = await api.post('/auth/login', userDetails);
            toast.success(response.data.msg);
            return response.data;
        } catch (error) {
            toast.error(error.response.data.msg);
            return thunkAPI.rejectWithValue(
                error.response?.data?.msg
            );
        }
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: false,
        user: null,
        loading: false,
        error: null,
    },
    reducers: {
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(signupUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(signupUser.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.user = action.payload.data;
            })
            .addCase(signupUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.user = action.payload.data;
            })
            .addCase(loginUser.rejected, (state, action) =>  {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
