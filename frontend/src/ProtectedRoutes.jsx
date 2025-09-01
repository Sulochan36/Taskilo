import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuthStore } from './store/useAuthStore';
import { Loader } from 'lucide-react';

const ProtectedRoute = () => {
    const { user, isCheckingAuth } = useAuthStore();
    const location = useLocation();

    if (isCheckingAuth && !user) {
        // You can customize a spinner/loading UI here
        return (
            <div className="flex items-center justify-center h-screen">
                <Loader className="size-10 animate-spin" />
            </div>
        );
    }

    if (!user) {
        // Redirect to login page, save current location to return after login
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    // If user is logged in, render child routes
    return <Outlet />;
};

export default ProtectedRoute;
