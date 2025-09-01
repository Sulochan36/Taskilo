import React from "react";
import {
    Facebook,
    Twitter,
    Github,
    Linkedin,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-neutral-900 py-10 px-6 md:px-12 lg:px-20">
            <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-700 dark:text-gray-300">

                {/* Left - Branding */}
                <div className="flex flex-col gap-2">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Taskilo</h2>
                    <p className="text-sm">
                        Your smart companion to manage, track, and achieve your goals.
                    </p>
                </div>

                {/* Middle - Navigation */}
                <div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Explore</h3>
                    <ul className="space-y-2">
                        <li>
                            <NavLink to="/" className="hover:underline">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/features" className="hover:underline">Features</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className="hover:underline">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className="hover:underline">Contact</NavLink>
                        </li>
                    </ul>
                </div>

                {/* Right - Social Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Follow Us</h3>
                    <div className="flex items-center gap-4">
                        <a href="#" aria-label="Twitter" className="hover:text-blue-500">
                            <Twitter className="w-5 h-5" />
                        </a>
                        <a href="#" aria-label="Facebook" className="hover:text-blue-600">
                            <Facebook className="w-5 h-5" />
                        </a>
                        <a href="#" aria-label="LinkedIn" className="hover:text-blue-700">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="#" aria-label="GitHub" className="hover:text-gray-800 dark:hover:text-white">
                            <Github className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom - Copyright */}
            <div className="mt-10 text-center text-sm text-gray-500 dark:text-gray-400 border-t pt-4 border-gray-200 dark:border-gray-700">
                © {new Date().getFullYear()} Taskilo. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
