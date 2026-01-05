import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import AppSideBar from "../components/AppSideBar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ToastContainer } from "react-toastify";

const DashboardLayout = () => {
    return (
        <TooltipProvider>
            <SidebarProvider>
                <AppSideBar />

                <main className="w-full">
                    <div className="p-4">
                        <SidebarTrigger />
                    </div>

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

export default React.memo(DashboardLayout);
