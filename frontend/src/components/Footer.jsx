import React from "react";
import { Facebook, Twitter, Github, Linkedin } from "lucide-react";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-black">
            <div className="max-w-7xl mx-auto px-6 py-16 md:px-12 lg:px-20">

                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

                    {/* Branding */}
                    <div>
                        <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-50 tracking-tight">
                            Taskilo
                        </h2>
                        <p className="mt-3 text-neutral-700 dark:text-neutral-400 leading-relaxed text-sm max-w-sm">
                            Your minimal, distraction-free system to manage tasks and stay focused on what matters.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-800 dark:text-neutral-300 mb-4">
                            Explore
                        </h3>

                        <ul className="space-y-3 text-neutral-700 dark:text-neutral-400">
                            <li><NavLink to="/" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition">Home</NavLink></li>
                            <li><NavLink to="/features" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition">Features</NavLink></li>
                            <li><NavLink to="/about" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition">About</NavLink></li>
                            <li><NavLink to="/contact" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition">Contact</NavLink></li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-800 dark:text-neutral-300 mb-4">
                            Follow Us
                        </h3>

                        <div className="flex items-center gap-4">
                            {/* button-like social icons */}
                            <a
                                href="#"
                                aria-label="Twitter"
                                className="
                                    w-10 h-10 flex items-center justify-center rounded-lg
                                    border border-neutral-300 dark:border-neutral-700
                                    hover:bg-neutral-200 dark:hover:bg-neutral-800
                                    transition-all
                                "
                            >
                                <Twitter className="w-5 h-5 text-neutral-800 dark:text-neutral-200" />
                            </a>

                            <a
                                href="#"
                                aria-label="Facebook"
                                className="
                                    w-10 h-10 flex items-center justify-center rounded-lg
                                    border border-neutral-300 dark:border-neutral-700
                                    hover:bg-neutral-200 dark:hover:bg-neutral-800
                                    transition-all
                                "
                            >
                                <Facebook className="w-5 h-5 text-neutral-800 dark:text-neutral-200" />
                            </a>

                            <a
                                href="#"
                                aria-label="LinkedIn"
                                className="
                                    w-10 h-10 flex items-center justify-center rounded-lg
                                    border border-neutral-300 dark:border-neutral-700
                                    hover:bg-neutral-200 dark:hover:bg-neutral-800
                                    transition-all
                                "
                            >
                                <Linkedin className="w-5 h-5 text-neutral-800 dark:text-neutral-200" />
                            </a>

                            <a
                                href="#"
                                aria-label="GitHub"
                                className="
                                    w-10 h-10 flex items-center justify-center rounded-lg
                                    border border-neutral-300 dark:border-neutral-700
                                    hover:bg-neutral-200 dark:hover:bg-neutral-800
                                    transition-all
                                "
                            >
                                <Github className="w-5 h-5 text-neutral-800 dark:text-neutral-200" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-14 pt-8 border-t border-neutral-200 dark:border-neutral-800 text-center">
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        © {new Date().getFullYear()} Taskilo. All rights reserved.
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
