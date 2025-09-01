import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';
import { Mail, Lock, User } from 'lucide-react';

const SignupPage = () => {
    const navigate = useNavigate();
    const { signup, loading, error } = useAuthStore();
    const [form, setForm] = useState({ fullName: '', email: '', password: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(form);
        if (useAuthStore.getState().user) {
            navigate('/dashboard'); // Redirect after successful signup
        }
    };

    return (
        <div className="min-h-[80vh] flex items-center justify-center px-4 mt-20">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-md bg-transparent border border-neutral-500 rounded-lg shadow-md p-8 flex flex-col gap-6"
            >
                {/* Header */}
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-800 dark:text-white">Taskilo</h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Create your account</p>
                </div>

                {/* Full Name Field */}
                <div className="flex flex-col gap-1">
                    <label className="text-sm text-gray-700 dark:text-gray-300">Full Name</label>
                    <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Enter your full name"
                            value={form.fullName}
                            onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                            required
                            className="w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-neutral-600 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-transparent"
                        />
                    </div>
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
                            placeholder="Create a password"
                            value={form.password}
                            onChange={(e) => setForm({ ...form, password: e.target.value })}
                            required
                            className="w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-neutral-600 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-transparent"
                        />
                    </div>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition disabled:opacity-50"
                >
                    {loading ? 'Creating account...' : 'Sign Up'}
                </button>

                {/* Error Message */}
                {error && (
                    <p className="text-red-500 text-sm text-center">{error}</p>
                )}

                {/* Already have account? */}
                <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                    Already have an account?{' '}
                    <Link to="/login" className="text-blue-600 hover:underline dark:text-blue-400">
                        Login
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default SignupPage;
