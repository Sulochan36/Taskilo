// import React from 'react'
// import { NavLink, useNavigate } from 'react-router-dom';
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { Button } from "@/components/ui/button"
// import {
//     DropdownMenu,
//     DropdownMenuContent,
//     DropdownMenuItem,
//     DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import { Moon, Sun } from 'lucide-react';
// import { useTheme } from './provider/ThemeProvider';
// import { SidebarTrigger } from "@/components/ui/sidebar"
// import { useAuthStore } from '../store/useAuthStore';


// const Navbar = () => {
//     const { user, logout } = useAuthStore();
//     const { setTheme } = useTheme()
//     const navigate = useNavigate();

//     const handleLogout = async () => {
//         await logout();
//         navigate('/login');
//     };


//     return (
//         <nav className='p-4 flex flex-row items-center justify-between border-b-2'>
//             {/* LEFT */}
//             <div>
//                 {user && <SidebarTrigger />}
//             </div>
            

//             {/* RIGHT */}
//             <div className='flex items-center gap-4'>
//                 <NavLink to="/">Home</NavLink>

//                 {/* Auth Buttons */}
//                 {!user ? (
//                     <>
//                         <Button variant="outline">
//                             <NavLink to="/signup">Signup</NavLink>
//                         </Button>
//                         <Button variant="outline">
//                             <NavLink to="/login">Login</NavLink>
//                         </Button>
//                     </>
//                 ) : (
//                     <>
//                     <h2>Welcome, {user?.fullName}</h2>
//                     <Button variant="outline" onClick={handleLogout}>
//                         Logout
//                     </Button>
//                     </>
//                 )}
                

//                 {/* Theme Menu */}
//                 <DropdownMenu>
//                     <DropdownMenuTrigger asChild>
//                         <Button variant="outline" size="icon">
//                             <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
//                             <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
//                             <span className="sr-only">Toggle theme</span>
//                         </Button>
//                     </DropdownMenuTrigger>
//                     <DropdownMenuContent>
//                         <DropdownMenuItem onClick={() => setTheme("light")}>
//                             Light
//                         </DropdownMenuItem>
//                         <DropdownMenuItem onClick={() => setTheme("dark")}>
//                             Dark
//                         </DropdownMenuItem>
//                         <DropdownMenuItem onClick={() => setTheme("system")}>
//                             System
//                         </DropdownMenuItem>
//                     </DropdownMenuContent>
//                 </DropdownMenu>

//             {user && <Avatar>
//                 <AvatarImage src="https://github.com/shadcn.png" />
//                 <AvatarFallback>CN</AvatarFallback>
//             </Avatar>}

//             </div>

//         </nav>
//     )
// }

// export default Navbar



import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useTheme } from "./provider/ThemeProvider";
import { useAuthStore } from "../store/useAuthStore";

const Navbar = () => {
    const { user, logout } = useAuthStore();
    const { setTheme } = useTheme();
    const navigate = useNavigate();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleLogout = async () => {
        await logout();
        navigate("/login");
    };

    const handleNavigateToSection = (id) => {
        navigate(`/#${id}`);
        setMobileMenuOpen(false); // Close mobile menu if open
    };

    const navLinks = (
        <>
            <button onClick={() => handleNavigateToSection("hero")} className="hover:text-blue-500">
                Home
            </button>
            <button onClick={() => handleNavigateToSection("features")} className="hover:text-blue-500">
                Features
            </button>
            <button onClick={() => handleNavigateToSection("how-it-works")} className="hover:text-blue-500">
                How It Works
            </button>
            <button onClick={() => handleNavigateToSection("problem-solution")} className="hover:text-blue-500">
                About
            </button>
        </>
    );

    return (
        <nav className="w-full px-6 md:px-12 py-4 border-b bg-transparent backdrop-blur-2xl z-50 relative">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <NavLink to="/" className="text-2xl font-bold text-gray-900 dark:text-white">
                    Taskilo
                </NavLink>

                {/* Desktop Nav */}
                <div className="hidden md:flex gap-6 text-md font-medium text-gray-700 dark:text-gray-300">
                    {navLinks}
                </div>

                {/* Right Side */}
                <div className="flex items-center gap-3">
                    {/* Theme toggle */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon">
                                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem onClick={() => setTheme("light")}>
                                Light
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("dark")}>
                                Dark
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("system")}>
                                System
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    {/* Auth Section */}
                    {!user ? (
                        <>
                            <NavLink to="/login">
                                <Button variant="outline" size="sm">Login</Button>
                            </NavLink>
                            <NavLink to="/signup">
                                <Button size="sm">Signup</Button>
                            </NavLink>
                        </>
                    ) : (
                        <>
                            <span className="hidden md:inline-block text-sm text-gray-700 dark:text-gray-300">
                                Welcome, {user?.fullName?.split(" ")[0]}
                            </span>
                            <Button variant="outline" size="sm" onClick={handleLogout}>
                                Logout
                            </Button>
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>{user?.fullName?.[0] ?? "U"}</AvatarFallback>
                            </Avatar>
                        </>
                    )}

                    {/* Hamburger Menu (Mobile) */}
                    <button
                        className="md:hidden ml-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden mt-4 flex flex-col gap-4 text-gray-700 dark:text-gray-300 text-sm font-medium">
                    {navLinks}

                    {!user ? (
                        <>
                            <NavLink to="/login" className="hover:text-blue-500">
                                Login
                            </NavLink>
                            <NavLink to="/signup" className="hover:text-blue-500">
                                Signup
                            </NavLink>
                        </>
                    ) : (
                        <>
                            <span>Welcome, {user?.fullName?.split(" ")[0]}</span>
                            <Button variant="outline" size="sm" onClick={handleLogout}>
                                Logout
                            </Button>
                        </>
                    )}
                </div>
            )}
        </nav>
    );
};

export default Navbar;


