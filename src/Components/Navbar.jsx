import React, { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-scroll";
import { motion } from "motion/react"
import { navText,navBg } from "./animate";
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () =>{
    setMenu(!menu);
    console.log(menu);
    
    
  }
  return (
  <div>
    <div className="relative bg-black">
      <div className="bg-transparent border-b border-neutral-700/80 fixed top-0 w-full h-16 text-white flex justify-between items-center z-50 lg:px-35 lg:py-12 md:px-7 md:py-10">
        <motion.div
              variants={navText(0.1)}
              initial="hidden"
              animate="visible"
        className="z-50"
        >
        <Link
              to="/"
              smooth={true}
              duration={900}
              className="cursor-pointer"
            >
          <h1 className="text-2xl lg:text-3xl tracking-wide font-poppins cursor-pointer font-medium pl-16 py-5 lg:pl-0 md:pl-0 ">
            <span className="bg-gradient-to-r from-[#37BEF8] via-70% to-[#375FF8] text-transparent bg-clip-text font-bold">
              T
            </span>
            arun
          </h1>
          </Link>
        </motion.div>
        <motion.div 
        variants={navText(0.3)}
        initial="hidden"
        animate="visible"  
        >
          <ul className="hidden md:flex gap-1 text-md font-light cursor-pointer bg-black py-2 px-4 rounded-xl ">
            <Link  
              to="/"
              smooth={true}
              duration={900}
              className="cursor-pointer"
            >
              <li
              
              className="hover:bg-neutral-900 hover:rounded-md transition-all duration-500 ease-in-out cursor-pointer px-4 py-2">
                Home
              </li>
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={900}
              className="cursor-pointer"
            >
              <li className="hover:bg-neutral-900 hover:rounded-md transition-all duration-500 ease-in-out cursor-pointer px-4 py-2">
                About
              </li>
            </Link>
            <Link
              to="education"
              smooth={true}
              duration={900}
              className="cursor-pointer"
            >
              <li className="hover:bg-neutral-900 hover:rounded-md transition-all duration-500 ease-in-out cursor-pointer px-4 py-2">
                Education
              </li>
            </Link>
            <Link
              to="technologies"
              smooth={true}
              duration={900}
              className="cursor-pointer"
            >
              <li className="hover:bg-neutral-900 hover:rounded-md transition-all duration-500 ease-in-out px-4 py-2 cursor-pointer">
                Technologies
              </li>
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={900}
              className="cursor-pointer"
            >
              <li className="hover:bg-neutral-900 hover:rounded-md transition-all duration-500 ease-in-out cursor-pointer px-4 py-2">
                Projects
              </li>
            </Link>
          </ul>
        </motion.div>

        <div>
        <Link
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
          <button className="hidden md:inline-flex relative h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#37BEF8_0%,#375FF8_50%,#37BEF8_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-1 text-md font-medium text-white backdrop-blur-3xl tracking-wide">
              Contact
            </span>
          </button>
          </Link>
        </div>
        <div className="absolute right-4 top-4 md:hidden pr-5">
          {menu ? <RxCross1  size={30} className="text-white cursor-pointer " onClick={handleMenu} /> : <IoMenuOutline size={36} className="text-white cursor-pointer z-50 " onClick={handleMenu}/> }
        </div>
      </div>

     
    </div>

    {menu && <motion.div
    variants={navBg(0.3)}
            initial="hidden"
            animate="visible"
    className="bg-black fixed top-0 left-0 w-2/3 h-full z-50">
    <ul className=" text-white bg-transparent   text-xl  pt-30 pb-16 text-center">
            <Link  
              to="/"
              smooth={true}
              duration={900}
              className="cursor-pointer"
            >
              <li
              className="hover:bg-neutral-900 hover:rounded-md transition-all duration-500 ease-in-out cursor-pointer px-4 py-2">
                Home
              </li>
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={900}
              className="cursor-pointer"
            >
              <li className="hover:bg-neutral-900 hover:rounded-md transition-all duration-500 ease-in-out cursor-pointer px-4 py-2">
                About
              </li>
            </Link>
            <Link
              to="education"
              smooth={true}
              duration={900}
              className="cursor-pointer"
            >
              <li className="hover:bg-neutral-900 hover:rounded-md transition-all duration-500 ease-in-out cursor-pointer px-4 py-2">
                Education
              </li>
            </Link>
            <Link
              to="technologies"
              smooth={true}
              duration={900}
              className="cursor-pointer"
            >
              <li className="hover:bg-neutral-900 hover:rounded-md transition-all duration-500 ease-in-out px-4 py-2 cursor-pointer">
                Technologies
              </li>
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={900}
              className="cursor-pointer"
            >
              <li className="hover:bg-neutral-900 hover:rounded-md transition-all duration-500 ease-in-out cursor-pointer px-4 py-2">
                Projects
              </li>
            </Link>
          </ul>
    </motion.div> }
    
  </div>
  );
};

export default Navbar;
