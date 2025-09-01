import React from "react";
import { Lightbulb, ListChecks, BarChart3 } from "lucide-react";

const steps = [
    {
        icon: <Lightbulb className="h-8 w-8 text-blue-600" />,
        title: "1. Set Your Goal",
        description: "Start by defining your main goal. Whether it's learning a skill or forming a habit, clarity is key.",
    },
    {
        icon: <ListChecks className="h-8 w-8 text-green-600" />,
        title: "2. Break It Down",
        description: "Split your goal into smaller milestones or tasks. Create step-by-step actions that are easy to follow.",
    },
    {
        icon: <BarChart3 className="h-8 w-8 text-purple-600" />,
        title: "3. Track Your Progress",
        description: "Use visual progress indicators, reminders, and streaks to stay consistent and motivated daily.",
    },
];

const HowItWorks = () => {
    return (
        <section id='how-it-works' className="w-full py-16 px-6 md:px-12 lg:px-20 bg-transparent">
            <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-5xl font-bold text-gray-900 dark:text-white">
                    How It Works
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
                    Taskilo helps you move from setting a goal to actually achieving it — one step at a time.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-md transition text-center"
                    >
                        <div className="mb-4">{step.icon}</div>
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                            {step.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-base">
                            {step.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HowItWorks;
