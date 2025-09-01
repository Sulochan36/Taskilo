import { create } from 'zustand';
import { axiosInstance } from '../lib/axios';
import toast from "react-hot-toast";

export const useAuthStore = create((set) => ({
    user: null,
    loading: false,
    error: null,
    isCheckingAuth: true,

    checkAuth: async () => {
        try {
            const res = await axiosInstance.get("/auth/check");

            set({ user: res.data });
        } catch (err) {
            console.log("Error in checkAuth:", err);
            toast.error(err.response.data.message);
            set({ user: null });
        } finally {
            set({ isCheckingAuth: false });
        }
    },

    signup: async (formData) => {

        set({ loading: true, error: null });
        try {
            const res = await axiosInstance.post('/auth/signup', formData); // call backend
            set({ user: res.data }); // store returned user info
            toast.success("Account created successfully");
        } catch (err) {
            set({ error: err.response?.data?.message || 'Signup failed' });
            toast.error(err.response.data.message);
        } finally {
            set({ loading: false });
        }
    },

    login: async (formData) => {

        set({ loading: true, error: null });
        try {
            const res = await axiosInstance.post('/auth/login', formData);
            set({ user: res.data });
            toast.success("Logged in successfully");
        } catch (err) {
            set({ error: err.response?.data?.message || 'Login failed' });
            toast.error(err.response.data.message);
        } finally {
            set({ loading: false });
        }
    },

    logout: async () => {
        try {
            await axiosInstance.post('/auth/logout');
            set({ user: null });
            toast.success("Logged out successfully");
        } catch (err) {
            console.error(err);
            toast.error(err.response.data.message);
        }
    },

    refreshToken: async () => {
        try {
            const res = await axiosInstance.post('/auth/refresh-token');
            const user = res.data?.user;
            if (user) {
                set({ user });
            }
            return true;
        } catch (err) {
            console.error("Token refresh failed", err);
            set({ user: null });
            toast.error("Session expired. Please log in again.");
            return false; // ❌ Don't throw — signal gracefully
        }
    }
}))