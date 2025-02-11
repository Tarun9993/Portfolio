import React from "react";
import { FaGithub } from "react-icons/fa6";
import  pro1  from "../../src/assets/pro1.png"
import  pro2  from "../../src/assets/pro2.png"
import  pro3  from "../../src/assets/pro3.png"
import  pro4  from "../../src/assets/pro4.png"
import toast, { Toaster } from 'react-hot-toast';
import { motion } from "motion/react"
import { projectImg, projectText } from "./animate";
const Projects = () => {

  const handleClick = (e) =>{
    e.preventDefault();
    toast.error('Something went wrong. Please try again later.', {
      position: "top-right",
      autoClose: 3000, // Closes after 3 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      
    });
  }

  return (
    <div className="pb-30 bg-black">
      <div className="text-center pt-15 pb-20">
        <button className="inline-flex relative h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#37BEF8_0%,#375FF8_50%,#37BEF8_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-1 text-2xl font-bold text-white backdrop-blur-3xl tracking-wide">
            Projects
          </span>
        </button>
      </div>
      <div className="md:flex lg:px-80 justify-between lg:gap-20  pb-25 px-6 sm:px-50 md:px-20 md:gap-4">
        <div>
            <motion.div
            variants={projectImg(0.4)}
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true }}

            className="h-[280px] w-[350px] bg-[#080808db] rounded-2xl">
            <img src={pro1} alt="img" className="h-56 p-2 rounded-2xl" />
            <div className="py-1 pl-3 flex gap-4">
            <a href="https://github.com/Tarun9993/Gym-Guru" className="z-40" target="_blank"> <FaGithub size={42} className="text-white bg-neutral-900 p-1 rounded-xl cursor-pointer"/></a>
            <a href="https://gym-guru-liard.vercel.app/" className="z-40" target="_blank"> <h2 className="text-white border border-white p-2 px-5 tracking-wide rounded-xl cursor-pointer ">Live</h2> </a>
            </div>
            </motion.div>
            </div>
        <motion.div
        variants={projectText(0.4)}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true }}
        className="  mt-8 md:mt-0">
        <h1 className="text-white pl-5 font-semibold text-xl">Gym-Guru Landing Page</h1>
            <h1
            className="text-neutral-500 font-sans  md:text-md text-sm md:font-semi-bold p-5 text-justify">GymGuru is a fitness landing page built using React and Tailwind CSS. It provides users with an engaging and visually appealing interface to explore workout plans, fitness tips, and a BMI calculator for health tracking. The page is designed to attract fitness enthusiasts and encourage them to achieve their health goals.</h1>
            <div className="pl-5 flex gap-2 pt-3 pb-5">
              <span className="text-[#347BF9] bg-neutral-900 px-2 text-sm rounded-sm font-semibold tracking-wide">React</span>
              <span className="text-[#347BF9] bg-neutral-900 px-2 text-sm rounded-sm font-semibold tracking-wide">Tailwind CSS</span>
              <span className="text-[#347BF9] bg-neutral-900 px-2 text-sm rounded-sm font-semibold tracking-wide">Framer Motion</span>   
            </div>
        </motion.div>
      </div>
      <div className="md:flex lg:px-80 justify-between lg:gap-20  pb-25 px-6 sm:px-50 md:px-20 md:gap-4">
        <div className="">
            <motion.div
            variants={projectImg(0.6)}
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true }}

            className="h-[280px] w-[350px] bg-[#080808db] rounded-2xl">
            <img src={pro2} alt="img" className="h-56 p-2 rounded-2xl" />
            <div className="py-1 pl-3 flex gap-4">
            <a href="https://github.com/Tarun9993/Weather_App" className="z-40" target="_blank"> <FaGithub size={42} className="text-white bg-neutral-900 p-1 rounded-xl cursor-pointer"/></a>
            <a href="https://weather-app-one-pi-94.vercel.app/" className="z-40" target="_blank"> <h2 className="text-white border border-white p-2 px-4 tracking-wide rounded-xl cursor-pointer ">Live</h2> </a>
            </div>
            </motion.div>
            </div>
        <motion.div
        variants={projectText(0.6)}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true }}
        className="  mt-8 md:mt-0">
        <h1 className="text-white pl-5 font-semibold text-xl"> Weather-App</h1>
            <h1 className="text-neutral-500 font-sans  md:text-md text-sm md:font-semi-bold p-5 text-justify">This Weather App is built using React and Tailwind CSS. It allows users to check real-time weather conditions by entering a city name. The app fetches data from the OpenWeatherMap API and displays important details like temperature, humidity, wind speed, and weather conditions.</h1>
            <div className="pl-5 flex gap-2 pt-3 pb-5">
              <span className="text-[#347BF9] bg-neutral-900 px-2 text-sm rounded-sm font-semibold tracking-wide">React</span>
              <span className="text-[#347BF9] bg-neutral-900 px-2 text-sm rounded-sm font-semibold tracking-wide">Tailwind CSS</span>
             
            </div>
        </motion.div>
      </div>
      <div className="md:flex lg:px-80 justify-between lg:gap-20  pb-25 px-6 sm:px-50 md:px-20 md:gap-4">
        <div className="">
            <motion.div
            variants={projectImg(0.8)}
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true }}
            className="h-[280px] w-[350px] bg-[#080808db] rounded-2xl">
            <img src={pro3} alt="img" className="h-56 p-2 rounded-2xl" />
            <div className="py-1 pl-3 flex gap-4">
            <a href="https://github.com/Tarun9993/Too-Doo" className="z-40" target="_blank"> <FaGithub size={42} className="text-white bg-neutral-900 p-1 rounded-xl cursor-pointer"/></a>
            <a href="https://too-doo-one.vercel.app/" className="z-40" target="_blank"> <h2 className="text-white border border-white p-2 px-4 tracking-wide rounded-xl cursor-pointer ">Live</h2> </a>
            </div>
            </motion.div>
            </div>
        <motion.div
        variants={projectText(0.8)}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true }}
        className=" mt-8 md:mt-0">
        <h1 className="text-white pl-5 font-semibold text-xl">Too-Do Applications</h1>
            <h1 className="text-neutral-500 font-sans  md:text-md text-sm md:font-semi-bold p-5 text-justify">This To-Do App is built using React and Tailwind CSS. It helps users manage their daily tasks by adding, editing, and deleting to-dos. The app provides a simple and interactive interface for better task organization.</h1>
            <div className="pl-5 flex gap-2 pt-3 pb-5">
              <span className="text-[#347BF9] bg-neutral-900 px-2 text-sm rounded-sm font-semibold tracking-wide">React</span>
              <span className="text-[#347BF9] bg-neutral-900 px-2 text-sm rounded-sm font-semibold tracking-wide">Tailwind CSS</span>
            </div>
        </motion.div>
      </div>
      <div className="md:flex lg:px-80 justify-between lg:gap-20  pb-25 px-6 sm:px-50 md:px-20 md:gap-4">
        <div>
            <motion.div
            variants={projectImg(1)}
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true }}
            
            className="h-[280px] w-[350px] bg-[#080808db] rounded-2xl">
            <img src={pro4} alt="img" className="h-56 p-2 rounded-2xl" />
            <div className="py-1 pl-3 flex gap-4">
            <a href="https://github.com/Tarun9993/Spotify-Clone" className="z-40" target="_blank"> <FaGithub size={42} className="text-white bg-neutral-900 p-1 rounded-xl cursor-pointer"/></a>
            <a href="#" className="z-40"> <h2 className="text-white border border-white p-2 px-4 tracking-wide rounded-xl cursor-pointer " onClick={handleClick}>Live</h2> </a>
            </div>
            </motion.div>
            </div>
        <motion.div
        variants={projectText(1)}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true }}
        className="  mt-8 md:mt-0">
          <h1 className="text-white pl-5 font-semibold text-xl">Spotify Clone</h1>
            <h1 className="text-neutral-500 font-sans  md:text-md text-sm md:font-semi-bold p-5 text-justify">The Spotify Clone is a music streaming web page built using HTML and CSS. It replicates the look and feel of the Spotify interface with a structured layout, including a navigation bar and a stylish music player design.</h1>
            <div className="pl-5 flex flex-wrap gap-2 pt-3 pb-5">
              <span className="text-[#347BF9] bg-neutral-900 px-2 text-sm rounded-sm font-semibold tracking-wide">Html</span>
              <span className="text-[#347BF9] bg-neutral-900 px-2 text-sm rounded-sm font-semibold tracking-wide">CSS</span>
               
            </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
