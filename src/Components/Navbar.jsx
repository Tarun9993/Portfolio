import React from "react";
import { IoMenuOutline } from "react-icons/io5";
const Navbar = () => {
  return (
    <div className="relative bg-black">
      <div className="backdrop-blur-lg border-b border-neutral-700/80 fixed top-0 w-full h-16 text-white flex justify-between items-center z-50 lg:px-35 lg:py-12 md:px-7 md:py-10">
        <div>
          <h1 className="text-2xl lg:text-3xl tracking-wide font-poppins cursor-pointer font-medium pl-16 py-5 lg:pl-0 md:pl-0 ">
             <span className="bg-gradient-to-r from-[#37BEF8] via-70% to-[#375FF8] text-transparent bg-clip-text font-bold">T</span>arun
          </h1>
        </div>
        <div>
          <ul className="hidden md:flex gap-1 text-md font-light cursor-pointer bg-neutral-900 py-2 px-4 rounded-xl ">
            <li className="hover:bg-neutral-600 hover:rounded-md transition-all duration-500 ease-in-out cursor-pointer px-4 py-2">
              Home
            </li>

            <li className="hover:bg-neutral-600 hover:rounded-md transition-all duration-500 ease-in-out cursor-pointer px-4 py-2">
              About
            </li>
            <li className="hover:bg-neutral-600 hover:rounded-md transition-all duration-500 ease-in-out cursor-pointer px-4 py-2">
              Education
            </li>
            <li className="hover:bg-neutral-600 hover:rounded-md transition-all duration-500 ease-in-out px-4 py-2 cursor-pointer">
              Skills
            </li>
            <li className="hover:bg-neutral-600 hover:rounded-md transition-all duration-500 ease-in-out cursor-pointer px-4 py-2">
              Projects
            </li>
          </ul>
        </div>
        <div>
        <button className="hidden md:inline-flex relative h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#37BEF8_0%,#375FF8_50%,#37BEF8_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-1 text-md font-medium text-white backdrop-blur-3xl tracking-wide">
              Contact
            </span>
          </button>
        </div>
        <div className="absolute right-4 top-4 md:hidden pr-5">
          <IoMenuOutline size={36} className="text-white cursor-pointer " />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
