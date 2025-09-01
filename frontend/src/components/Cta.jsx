import React from 'react'
import { Link } from 'react-router-dom';

const Cta = () => {
    return (
        <section class="py-16">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div
                    class="lg:py-14 lg:px-20 p-10 rounded-2xl bg-gradient-to-r from-muted to-65% flex items-center justify-between flex-col lg:flex-row gap-x-20"
                >
                    <div class="block text-center mb-5 lg:text-left lg:mb-0">
                        <h2
                            class="font-manrope text-4xl text-white font-semibold mb-5 lg:mb-2"
                        >
                            Get Started
                        </h2>
                        <p class="text-xl text-indigo-100">
                            Create account and move ahead with your goals.
                        </p>
                    </div>
                    <Link to="/signup" className="flex items-center gap-2 bg-white rounded-full shadow-sm text-lg text-indigo-600 font-semibold py-4 px-8 transition-all duration-500">
                        Create Account

                        <svg
                            width="19"
                            height="14"
                            viewBox="0 0 19 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1.75 7L16.4167 7M11.8333 12.5L16.6852 7.64818C16.9907 7.34263 17.1435 7.18985 17.1435 7C17.1435 6.81015 16.9907 6.65737 16.6852 6.35182L11.8333 1.5"
                                stroke="#4F46E5"
                                stroke-width="2.4"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>

    )
}

export default Cta