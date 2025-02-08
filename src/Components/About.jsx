import { style } from 'motion/react-client'
import React from 'react'

const About = () => {
  return (
    <div >
        <div className='mt-10 text-center'>
        <button className="inline-flex relative h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#37BEF8_0%,#375FF8_50%,#37BEF8_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-1 text-xl font-medium text-white backdrop-blur-3xl tracking-wide">
              About Us
            </span>
          </button>
        </div>

        <div className="md:flex lg:gap-10 lg:px-50 sm:px-50 sm:pt-10 md:px-20  md:py-20 lg:py-10 px-15 pt-10">
            <div>
                <img src="https://ank-portfolio-gray.vercel.app/assets/about_1removebg-15Clxbh4.png" alt="img"  className='sm:h-[400px]'/>
            </div>
            <div className='md:max-w-1/2 md:pt-20 sm:max-w-96 sm:pt-10'>
                <h2 className='text-neutral-400 font-semi-bold text-xl font-sans md:leading-9 text-justify leading-8'>I’m a passionate developer who loves building fast and efficient web applications. I have strong skills in React.js, Tailwind CSS, Spring Boot, Hibernate, and MySQL. I focus on creating smooth user experiences and writing clean, maintainable code. Explore my work, and let's connect to build something amazing together!</h2>
            </div>
        </div>
    </div>
  )
}

export default About
