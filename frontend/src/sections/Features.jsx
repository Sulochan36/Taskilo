import React from "react";
import { CheckCircle, Calendar, Bell, LayoutDashboard, TrendingUp } from "lucide-react";

const features = [
    {
        icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
        title: "Break Down Goals",
        description: "Turn big dreams into small, actionable tasks that keep you focused and moving forward.",
    },
    {
        icon: <CheckCircle className="h-8 w-8 text-green-600" />,
        title: "Progress Tracking",
        description: "Visualize your progress with interactive streaks, bars, and achievement indicators.",
    },
    {
        icon: <Bell className="h-8 w-8 text-yellow-500" />,
        title: "Smart Reminders (Coming Soon)",
        description: "Stay consistent with friendly nudges and deadline alerts to keep you on track.",
    },
    {
        icon: <Calendar className="h-8 w-8 text-purple-600" />,
        title: "Deadline Management",
        description: "Set due dates and manage timelines to align with your life and schedule.",
    },
    {
        icon: <LayoutDashboard className="h-8 w-8 text-pink-600" />,
        title: "Personalized Dashboard",
        description: "Categorize your goals and see a clear overview of your progress at a glance.",
    },
];

const Features = () => {
    return (
        <section id="features" className="relative w-full py-24 px-6 md:px-12 lg:px-20 mt-30 overflow-hidden">

            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] z-0" />

            {/* Heading */}
            <div className="text-center mb-16">
                <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
                    Powerful Features to Achieve More
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                    Everything you need to plan, track, and crush your goals — all in one place.
                </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="relative flex flex-col items-start bg-gradient-to-br from-neutral-100 to-white dark:from-neutral-800 dark:to-neutral-700 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105"
                    >
                        {/* Floating Icon */}
                        <div className="absolute -top-6 left-6 p-4 bg-white dark:bg-neutral-900 rounded-full shadow-md flex items-center justify-center">
                            {feature.icon}
                        </div>

                        {/* Card Content */}
                        <h3 className="mt-8 text-2xl font-bold text-gray-900 dark:text-white mb-3">
                            {feature.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;
