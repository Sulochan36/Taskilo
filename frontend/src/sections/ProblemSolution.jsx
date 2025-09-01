import React from "react";

const ProblemSolution = () => {
    return (
        <section id='problem-solution' className="w-full py-16 px-6 md:px-12 lg:px-20 bg-transparent">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
                    Why Taskilo?
                </h2>
                <p className="text-lg text-neutral-300 mb-12">
                    We built Taskilo to tackle a simple but common problem — people set
                    goals, but rarely follow through.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
                {/* Problem */}
                <div className="bg-transparent rounded-lg p-6 shadow-xs shadow-amber-50 hover:shadow-md transition duration-200">
                    <h3 className="text-2xl font-semibold text-red-600 dark:text-red-500 mb-4">
                        The Problem
                    </h3>
                    <ul className="text-neutral-200 text-lg text-justify list-disc list-inside space-y-2">
                        <li>
                            Most goal-setting tools are too simple to track long-term progress.
                        </li>
                        <li>
                            Others are overly complex, making it hard to stay consistent.
                        </li>
                        <li>
                            Lack of structure and motivation causes users to lose focus.
                        </li>
                        <li>
                            For people who tend to procrastinate, setting up templates and tasks can feel overwhelming.
                        </li>
                    </ul>
                </div>

                {/* Solution */}
                <div className="bg-transparent rounded-lg p-6 shadow-xs shadow-amber-50 hover:shadow-md transition duration-200">
                    <h3 className="text-2xl font-semibold text-green-600 dark:text-green-400 mb-4">
                        The Solution
                    </h3>
                    <ul className="text-neutral-200 text-lg text-justify list-disc list-inside space-y-2">
                        <li>
                            Taskilo helps break down big goals into smaller, manageable milestones.
                        </li>
                        <li>
                            Encourages action with clear, structured tasks and progress tracking.
                        </li>
                        <li>
                            Built-in reminders keep users consistent and on track.
                        </li>
                        <li>
                            A clean, intuitive UI reduces distraction and makes goal-setting effortless.
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default ProblemSolution;
