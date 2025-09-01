import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';
import { Mail, Lock } from 'lucide-react';

const LoginPage = () => {
    const navigate = useNavigate();
    const { login, loading, error } = useAuthStore();
    const [form, setForm] = useState({ email: '', password: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(form);
        if (useAuthStore.getState().user) {
            navigate('/dashboard');
        }
    };

    return (
        <div className="min-h-[80vh] flex items-center justify-center px-4 mt-10">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-md bg-transparent border border-neutral-500 rounded-lg shadow-neutral-400 shadow-md p-8 flex flex-col gap-6"
            >
                {/* Header */}
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-800 dark:text-white">Taskilo</h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Login to continue</p>
                </div>

                {/* Email Field */}
                <div className="flex flex-col gap-1">
                    <label className="text-sm text-gray-700 dark:text-gray-300">Email</label>
                    <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            required
                            className="w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-neutral-600 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-transparent"
                        />
                    </div>
                </div>

                {/* Password Field */}
                <div className="flex flex-col gap-1">
                    <label className="text-sm text-gray-700 dark:text-gray-300">Password</label>
                    <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={form.password}
                            onChange={(e) => setForm({ ...form, password: e.target.value })}
                            required
                            className="w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-neutral-600 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-transparent"
                        />
                    </div>
                </div>

                {/* Login Button */}
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-600 hover:bg-blue-700 cursor-pointer text-white font-semibold py-2 rounded-md transition disabled:opacity-50"
                >
                    {loading ? 'Logging in...' : 'Login'}
                </button>

                {/* Error Message */}
                {error && (
                    <p className="text-red-500 text-sm text-center">{error}</p>
                )}

                {/* Signup Link */}
                <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                    Don&apos;t have an account?{' '}
                    <Link to="/signup" className="text-blue-600 hover:underline dark:text-blue-400">
                        Sign up
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default LoginPage;
