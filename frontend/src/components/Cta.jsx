import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Cta = () => {
    return (
        <section className="py-24">
            <div className="mx-auto max-w-6xl px-6">

                <div
                    className="
                        p-12 md:p-16 rounded-3xl 
                        border border-neutral-300 dark:border-neutral-700

                        /* stronger but still neutral gradient */
                        bg-gradient-to-br 
                        from-neutral-50 via-neutral-200 to-neutral-100
                        dark:from-neutral-900 dark:via-neutral-800 dark:to-black

                        /* drift requirements */
                        bg-[length:250%_250%]
                        bg-[position:0%_50%]
                        animate-[drift_12s_ease-in-out_infinite]

                        shadow-sm dark:shadow-none
                        flex flex-col md:flex-row 
                        items-center justify-between 
                        gap-10
                    "
                >
                    {/* LEFT CONTENT */}
                    <div className="text-center md:text-left max-w-xl">
                        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
                            Ready to Get Started?
                        </h2>
                        <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
                            Create your account and begin organizing your tasks with structure and clarity.
                        </p>
                    </div>

                    {/* BUTTON */}
                    <Link
                        to="/signup"
                        className="
                            flex items-center gap-3 
                            px-8 py-4 rounded-full 
                            bg-black dark:bg-white 
                            text-white dark:text-black 
                            font-semibold text-lg 
                            shadow-md hover:shadow-lg 
                            transition-all duration-300 
                            hover:-translate-y-0.5
                        "
                    >
                        Create Account
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default Cta;
