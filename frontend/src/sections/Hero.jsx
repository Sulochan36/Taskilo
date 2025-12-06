import React from 'react'

const Hero = () => {
    return (
        <section id='hero' className='container flex flex-col flex-wrap justify-center items-center gap-y-4 px-4 py-5'
        >
            {/* LOGO */}
            <div>
                <span className='text-3xl font-bold'>Taskilo</span>
            </div>

            {/* HEADLINE, SUBHEADLINE, CTA */}
            <div className='flex flex-col justify-center items-center gap-y-3.5 max-w-3xl'>
                <div className='flex flex-col justify-center items-center gap-y-2'>
                    <h1 className='text-6xl text-center font-extrabold leading-tight text-shadow-lg dark:text-shadow-neutral-700'>Manage And Track Your Goals Easily And Smartly</h1>
                    <h3 className='text-xl text-center max-w-xl my-5 text-neutral-400'>Set the purpose, Break your goals into small achievable steps, stay on track and celebrate every milestone you achive </h3>
                </div>
                
                <div>
                    <button type="button" className="px-4 py-2 text-[18px] bg-black text-white dark:bg-white dark:text-black font-semibold rounded-md hover:cursor-pointer transition-all duration-300 my-3 hover:scale-110 hover:shadow-xl hover:inset-2 hover:inset-white ">
                        Get Started
                    </button>
                </div>
            </div>

            {/* IMAGE */}
            <div className="w-full max-w-5xl h-auto rounded-2xl my-5 ">
                <img className='rounded-2xl shadow-[0px_2px_6px_rgba(0,0,0,0.3),0px_4px_12px_rgba(0,0,0,0.3),0px_8px_20px_rgba(0,0,0,0.3)]  dark:shadow-[0px_2px_6px_rgba(255,255,255,0.3),0px_4px_12px_rgba(255,255,255,0.3),0px_8px_20px_rgba(255,255,255,0.1)]' src="/dashboard.png" alt="Taskilo" />
            </div>
        </section>
    )
}

export default Hero