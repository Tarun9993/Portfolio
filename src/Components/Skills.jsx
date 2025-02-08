import React from 'react'
import { RiReactjsLine } from "react-icons/ri";
import { FaJava } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiSpringboot } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
const Skills = () => {
    return (
        // <div className='bg-gradient-to-r from-[#101010] via-[#1a1a1a] to-[#101010] border rounded-sm'>
        <div className='pt-15 pb-30'>
            <div className='text-center pt-15 pb-20'>

             <button className="inline-flex relative h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#37BEF8_0%,#375FF8_50%,#37BEF8_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-1 text-2xl font-bold text-white backdrop-blur-3xl tracking-wide">
              Technologies
            </span>
          </button>
            </div>
         <div
          className='flex flex-wrap items-center justify-center gap-7'>
             <div  
             className='rounded-2xl border-4 border-neutral-900 p-2'>
                 <RiReactjsLine className='text-7xl text-cyan-400'/>
             </div>


             <div 
             className='rounded-2xl border-4 border-neutral-900 p-2'>
                 <FaJava  className='text-7xl text-yellow-300'/>
             </div>
             <div 
             className='rounded-2xl border-4 border-neutral-900 p-2'>
                 <RiTailwindCssFill className='text-7xl text-cyan-400'/>
             </div>
             <div 
             className='rounded-2xl border-4 border-neutral-900 p-2'>
                 <SiSpringboot className='text-7xl text-green-400'/>
             </div>
             <div 
             className='rounded-2xl border-4 border-neutral-900 p-2'>
                 <GrMysql className='text-7xl text-blue-800'/>
             </div>
             </div>
         </div>
   )
 }

export default Skills
