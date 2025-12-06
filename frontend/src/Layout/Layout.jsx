import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useAuthStore } from "../store/useAuthStore";
import AppSideBar from "../components/AppSideBar";

const Layout = () => {
    const { user } = useAuthStore();

    return (
        <TooltipProvider>
            <SidebarProvider>
                {user && <AppSideBar />}
                <main className="w-full">
                    <Navbar />
                    <section className="px-4 mt-30">
                        <Outlet />
                    </section>
                </main>
                <ToastContainer />
            </SidebarProvider>
        </TooltipProvider>
    );
};

export default Layout;
