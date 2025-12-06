import React from "react";
import { Lightbulb, ListChecks, BarChart3 } from "lucide-react";

const steps = [
    {
        icon: Lightbulb,
        title: "Set Your Goal",
        description:
            "Start by defining a clear and specific objective. Whether it's a big long-term ambition or a small habit you want to build, clarity sets the direction and gives you something measurable to work toward.",
    },
    {
        icon: ListChecks,
        title: "Break It Down",
        description:
            "Divide your main goal into smaller, manageable tasks. Each task should feel achievable and should move you a step closer to the final outcome. This reduces overwhelm and keeps you steadily progressing.",
    },
    {
        icon: BarChart3,
        title: "Track Your Progress",
        description:
            "Use reminders, streaks, and visual progress indicators to stay consistent. Tracking helps you stay motivated, maintain momentum, and identify what’s working and what needs adjustment.",
    },
];

const HowItWorks = () => {
    return (
        <section
            id="how-it-works"
            className="relative w-full py-20 px-6 md:px-12 lg:px-20 bg-transparent flex flex-col justify-center items-center"
        >
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] -z-10" />
            <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-5xl font-bold text-gray-900 dark:text-white">
                    How It Works
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
                    Follow these simple steps to turn your goals into achievable actions.
                </p>
            </div>

            <div className="max-w-3xl mx-auto flex flex-col gap-10 p-8">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className="p-8 rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-gradient-to-br from-neutral-100 to-neutral-50 dark:from-neutral-800 dark:to-neutral-700 text-neutral-700 dark:text-neutral-200 shadow-sm dark:shadow-neutral-700 hover:shadow-md dark:hover:shadow-md dark:hover:shadow-neutral-600 transition-all duration-300 flex gap-6"
                    >
                        {/* Icon */}
                        <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gray-100 dark:bg-neutral-800 flex items-center justify-center">
                            <step.icon className="h-8 w-8 text-gray-900 dark:text-gray-100" />
                        </div>

                        {/* Content */}
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                                {step.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HowItWorks;
