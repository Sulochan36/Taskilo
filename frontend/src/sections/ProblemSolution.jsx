import React from "react";

const ProblemSolution = () => {
    return (
        <section id="problem-solution" className="w-full py-24 px-6 md:px-12 lg:px-20 bg-transparent">

            {/* Heading */}
            <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-5xl font-bold text-black dark:text-white mb-4">
                    Why Taskilo?
                </h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    People set goals with good intentions — but staying consistent is where most struggle.
                </p>
            </div>

            {/* Layout */}
            <div className="grid grid-cols-1 md:grid-cols-[45%_1px_45%] gap-12 max-w-6xl mx-auto items-start">

                {/* Problem Card */}
                <div className="
                    col-span-1 
                    bg-neutral-900 dark:bg-neutral-900 
                    text-neutral-300 dark:text-neutral-300 
                    rounded-3xl 
                    p-10 md:p-12
                    min-h-[380px] md:min-h-[420px]
                    border border-neutral-800 
                    shadow-inner shadow-black/20
                ">
                    <h3 className="text-3xl font-bold mb-6 text-neutral-200">
                        The Problem
                    </h3>

                    <ul className="space-y-4 text-neutral-400 leading-relaxed">
                        <li className="flex items-start">
                            <span className="mr-3 text-amber-400">•</span>
                            <p>Most goal-setting tools are too simple to track long-term progress.</p>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-3 text-amber-400">•</span>
                            <p>Others are overly complex, making consistency difficult.</p>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-3 text-amber-400">•</span>
                            <p>Lack of structure and motivation causes users to lose focus.</p>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-3 text-amber-400">•</span>
                            <p>Procrastination makes starting feel overwhelming.</p>
                        </li>
                    </ul>
                </div>

                {/* Divider */}
                <div className="hidden md:block w-full border-l border-neutral-300 dark:border-neutral-700 mx-auto h-full" />

                {/* Solution Card */}
                <div className="
                    col-span-1 
                    bg-gradient-to-br from-neutral-100 to-neutral-50 dark:from-neutral-800 dark:to-neutral-700
                    text-neutral-700 dark:text-neutral-200 
                    rounded-3xl 
                    p-10 md:p-12
                    min-h-[380px] md:min-h-[420px]
                    border border-neutral-300 dark:border-neutral-700 
                    shadow-lg shadow-black/5
                    hover:scale-105 transition-transform duration-300
                ">
                    <h3 className="text-3xl font-bold mb-6 text-neutral-800 dark:text-neutral-100">
                        The Solution
                    </h3>

                    <ul className="space-y-4 leading-relaxed">
                        <li className="flex items-start">
                            <span className="mr-3 text-emerald-400">•</span>
                            <p>Breaks big goals into small, manageable milestones.</p>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-3 text-emerald-400">•</span>
                            <p>Provides clear tasks that keep you focused and motivated.</p>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-3 text-emerald-400">•</span>
                            <p>Built-in reminders help you stay consistent effortlessly.</p>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-3 text-emerald-400">•</span>
                            <p>A clean, distraction-free UI makes goal-setting simple and enjoyable.</p>
                        </li>
                    </ul>
                </div>

            </div>
        </section>
    );
};

export default ProblemSolution;
