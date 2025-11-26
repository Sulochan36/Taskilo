import React, { useEffect } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
} from 'react-router-dom';

import Layout from './Layout/Layout.jsx';


import HomePage from './pages/HomePage.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Goals from './pages/Goals.jsx';
import Notes from './pages/Notes.jsx';
import TodoLists from './pages/TodoLists.jsx';
import SignupPage from './pages/SignupPage.jsx';
import LoginPage from './pages/LoginPage.jsx';

import { GoalsProvider } from './GoalsContext';
import { useAuthStore } from './store/useAuthStore.js';
import { Loader } from 'lucide-react';
import ProtectedRoute from './ProtectedRoutes.jsx';
import GoalDetails from './pages/GoalDetails.jsx';

const App = () => {
  const { user, checkAuth, isCheckingAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, []);

  if (isCheckingAuth && !user) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    );
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} /> 
        {/* Public routes */}
        <Route path="signup" element={!user ? <SignupPage /> : <Navigate to="/dashboard" />} />
        <Route path="login" element={!user ? <LoginPage /> : <Navigate to="/dashboard" />} />

        {/* Protected routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="goals" element={<Goals />} />
          <Route path="notes" element={<Notes />} />
          <Route path="todolists" element={<TodoLists />} />

          {/* Goal Details Page for Creating & Editing */}
          <Route path="goalDetails/:id" element={<GoalDetails />} /> {/* Edit an existing goal */}
          <Route path="goalDetails/new" element={<GoalDetails />} /> {/* Create a new goal */}
        </Route>
      </Route>
    )
  );

  return (
    <GoalsProvider>
      <RouterProvider router={router} />
    </GoalsProvider>
  );
};

export default App;
