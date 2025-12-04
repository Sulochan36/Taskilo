import React, { useEffect } from 'react'
import Hero from '../sections/Hero'
import Features from '../sections/Features'
import ProblemSolution from '../sections/ProblemSolution'
import HowItWorks from '../sections/HowItWorks'
import { useLocation } from 'react-router'
import Cta from '../components/cta'
import Footer from '../components/Footer'


const HomePage = () => {

    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace("#", "");
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);

    return (
        <div className='flex flex-wrap flex-col justify-center items-center'>
            <section className=' flex flex-wrap flex-col justify-center items-center gap-y-3.5 w-full '>
                
                <Hero />
                <Features />
                <ProblemSolution />
                <HowItWorks/>
                <Cta/>
            </section>

            <footer className="w-full">
                <Footer />
            </footer>
        </div>
    )
}

export default HomePage