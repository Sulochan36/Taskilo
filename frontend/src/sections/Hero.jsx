import React from 'react'

const Hero = () => {
    return (
        <section id='hero' className='container flex flex-col flex-wrap justify-center items-center gap-y-4 px-4 py-5'>
            {/* LOGO */}
            <div>
                <span className='text-3xl font-bold'>Taskilo</span>
            </div>

            {/* HEADLINE, SUBHEADLINE, CTA */}
            <div className='flex flex-col justify-center items-center gap-y-3.5 max-w-3xl'>
                <div className='flex flex-col justify-center items-center gap-y-2'>
                    <h1 className='text-6xl text-center font-extrabold leading-tight '>Manage And Track Your Goals Easily And Smartly</h1>
                    <h3 className='text-xl text-center max-w-xl my-5 text-neutral-400'>Set the purpose, Break your goals into small achievable steps, stay on track and celebrate every milestone you achive </h3>
                </div>
                
                <div>
                    <button type="button" className="px-6 py-3 text-xl font-semibold cursor-pointer bg-blue-600 text-white rounded hover:bg-blue-700 transition my-3">
                        Create Account
                    </button>
                </div>
            </div>

            {/* IMAGE */}
            <div className="w-full max-w-5xl h-auto rounded-2xl my-5">
                <img className='rounded-2xl shadow-[0px_4px_16px_rgba(255,255,255,0.3),_0px_8px_24px_rgba(255,255,255,0.3),_0px_16px_56px_rgba(255,255,255,0.1)]' src="/dashboard.png" alt="Taskilo" />
            </div>
        </section>
    )
}

export default Hero