"use client";
import React from "react";
import { SparklesCore } from "../Components/ui/sparkles";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import { Link } from "react-scroll";
import { motion } from "motion/react"
import { sparklesText } from "./animate"
import { Typewriter } from "react-simple-typewriter";
import resume from "../public/Resume.pdf"
export  function SparklesPreview() {
  
  return (
    (<div
      className="h-full relative w-full bg-black  overflow-hidden">
      <div className="w-full absolute inset-0 h-full  z-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF" />
      </div>
     <div className="md:flex lg:gap-10 z-50 lg:px-50  md:px-28 md:py-50 py-10 lg:py-50">
        <motion.div
        // variants={sparklesText(1)}
        // initial="hidden"
        // animate="visible"
        
        className="md:max-w-1/2">  
          <div className="">
        <motion.h1
        variants={sparklesText(1)}
        initial="hidden"
        animate="visible"
         className="text-white font-semi-bold text-3xl tracking-wide sm:pt-18 sm:px-32 md:px-0 md:pt-0 pt-20 sm:p-0 p-7 w-full px-10">Hi, Myself     
          <span className="bg-gradient-to-r from-[#37BEF8] via-70% to-[#375FF8] text-transparent bg-clip-text font-bold text-5xl font-sans "> Tarun Kumar</span>
          </motion.h1>
          </div>
          <motion.div
          variants={sparklesText(1.1)}
          initial="hidden"
          animate="visible"
          >
            <h1 className="text-white font-medium tracking-wide text-2xl sm:px-40 sm:pt-10 sm:text-2xl md:pt-6 md:px-0 pt-5 pl-10 px-5 leading-10 w-full"> I am{" "}
      <span className="text-white font-bold text-3xl font-sans">
        <Typewriter
          words={["a web Developer", "a Problem Solver","a UI/UX Enthusiast"]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </span> </h1>
          </motion.div>
          <div>
            <motion.h2
            variants={sparklesText(1.2)}
            initial="hidden"
            animate="visible"
            className="text-[#b9b9b9] md:pt-5 text-lg font-light sm:pt-7 sm:px-33 md:px-0 leading-8  pt-5 px-10 text-justify w-full"> 
            I’m a passionate and dedicated Web developer with expertise in building scalable and efficient web applications</motion.h2>
          </div>
          <motion.div
          variants={sparklesText(1.5)}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap sm:gap-7 gap-5 pt-10 sm:px-60 md:px-0 px-10">

            <a href="https://www.linkedin.com/in/tarun-kumar-1aaba2252/" className="z-20"target="_blank"><FaLinkedinIn size={50} className="text-white border border-neutral-200 p-3 rounded-xl cursor-pointer"/></a>
          <a href="https://github.com/Tarun9993/" className="z-20" target="_blank"> <FaGithub size={50} className="text-white border border-neutral-200 p-3 rounded-xl cursor-pointer"/></a>
         
          <a
                href="https://x.com/Tarun_225?t=H9gIh80DhLhwi93JyBtKEA&s=09"
                className="z-20"
                target="_blank"
              >
                <RiTwitterXLine
                  size={50}
                  className="text-white border border-neutral-200 p-3 rounded-xl cursor-pointer "
                />
              </a>
          <a href={resume} download="resume" rel="noopener noreferrer"  className="z-20">
          <h2 className="text-white border border-neutral-200 p-3 px-4 tracking-wide rounded-xl cursor-pointer " >RESUME</h2>
          </a>
         
          </motion.div>
          <div className="pt-10">
             <Link
                          to="contact"
                          smooth={true}
                          duration={900}
                          className="cursor-pointer"
                        >
          <motion.button
          variants={sparklesText(1.8)}
          initial="hidden"
          animate="visible"
          className="hidden md:inline-flex relative h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#37BEF8_0%,#375FF8_50%,#37BEF8_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-1 text-md font-medium text-white backdrop-blur-3xl tracking-wide">
              Contact
            </span>
             </motion.button>
             </Link>
          </div>
        </motion.div>
        <div>
          <motion.div
          initial={{ opacity:0,
            x:80,  }}
            animate={{ opacity:1,
              x:0,
              transition:{
                  duration:1.4,
                  type: "spring",
                  stiffness: 30,
                  delay: 1.2
              }}}
          >
          <img src="https://avatars.githubusercontent.com/u/156299978?v=4" alt="img"  className="hidden sm:block lg:h-96 md:h-72 lg:ml-27 md:ml-18 rounded-full mt-10 lg:mt-0 sm:ml-10  sm:h-64 sm:px-50 md:px-0 px-30" />
          </motion.div>
        </div>
     </div>
     
     
    </div>)
  );
}
