import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    Navigate,
} from "react-router-dom";


import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Dashboard from "./pages/Dashboard";
import Goals from "./pages/Goals";
import Notes from "./pages/Notes";
import TodoLists from "./pages/TodoLists";
import GoalDetails from "./pages/GoalDetails";
import PublicLayout from "./Layout/PublicLayout";
import HomePage from "./pages/HomePage";
import DashboardLayout from "./Layout/DashboardLayout";
import ProtectedRoute from "./ProtectedRoutes";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            {/* PUBLIC */}
            <Route element={<PublicLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
            </Route>

            {/* PROTECTED */}
            <Route element={<ProtectedRoute />}>
                <Route element={<DashboardLayout />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/goals" element={<Goals />} />
                    <Route path="/notes" element={<Notes />} />
                    <Route path="/todolists" element={<TodoLists />} />
                    <Route path="/goalDetails/:id" element={<GoalDetails />} />
                    <Route path="/goalDetails/new" element={<GoalDetails />} />
                </Route>
            </Route>
        </>
    )
);
