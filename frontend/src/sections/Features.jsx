import React from "react";
import { CheckCircle, Calendar, Bell, LayoutDashboard, Moon, TrendingUp } from "lucide-react";

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
        description: "Stay consist1ent with friendly nudges and deadline alerts to keep you on track.",
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
    {
        icon: <Moon className="h-8 w-8 text-gray-600 dark:text-white" />,
        title: "Dark Mode",
        description: "Work comfortably day or night with built-in dark mode support.",
    },
];

const Features = () => {
    return (
        <section id="features" className="w-full py-16 px-6 md:px-12 lg:px-20">
            <div className="text-center mb-12">
                <h2 className="text-5xl text-center font-bold text-gray-900 dark:text-white">Powerful Features to Achieve More</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
                    Everything you need to plan, track, and crush your goals — all in one place.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-start p-6 bg-transparent rounded-lg shadow-xs shadow-neutral-200 hover:shadow-md transition duration-300"
                    >
                        <div className="mb-4">{feature.icon}</div>
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{feature.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;
