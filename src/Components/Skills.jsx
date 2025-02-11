import React from 'react'
import { RiReactjsLine } from "react-icons/ri";
import { FaJava } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiSpringboot } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { motion } from "motion/react"
const Skills = () => {
    return (
        // <div className='bg-gradient-to-r from-[#101010] via-[#1a1a1a] to-[#101010] border rounded-sm'>
        <div className='pt-15 pb-30 bg-black'>
            <div className='text-center pt-15 pb-20'>

             <button className="inline-flex relative h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#37BEF8_0%,#375FF8_50%,#37BEF8_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-1 text-2xl font-bold text-white backdrop-blur-3xl tracking-wide">
              Technologies
            </span>
          </button>
            </div>
         <motion.div
          initial={{ x: -70, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.6,
            type: "spring",
            stiffness: 20,
            damping: 10,
            delay: 0.4,
          }}
          viewport={{ once: true, amount: 0.2 }} 
          className='flex flex-wrap items-center justify-center gap-7'>
             <motion.div  
             initial={{ y: 7 }}
             animate={{ y: 0 }}
             transition={{
                duration: 1.5, 
                delay: 0.2,
               repeat: Infinity, 
               repeatType: "reverse", 
               ease: "easeInOut", 
             }}
             className='rounded-2xl border-4 border-neutral-900 p-2'>
                 <RiReactjsLine className='text-7xl text-cyan-400'/>
             </motion.div>

             <motion.div 
              initial={{ y: -7 }}
              animate={{ y: 0 }}
              transition={{
                 duration: 1.5, 
                 delay: 0.2,
                repeat: Infinity, 
                repeatType: "reverse", 
                ease: "easeInOut", 
              }}
             className='rounded-2xl border-4 border-neutral-900 p-2'>
                 <FaJava  className='text-7xl text-yellow-300'/>
             </motion.div>
             <motion.div
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              transition={{
                duration: 1.8, 
                delay: 0.2,
                repeat: Infinity, 
                repeatType: "reverse", 
                ease: "easeInOut", 
              }} 
             className='rounded-2xl border-4 border-neutral-900 p-2'>
                 <RiTailwindCssFill className='text-7xl text-cyan-400'/>
             </motion.div>
             <motion.div 
              initial={{ y: -7 }}
              animate={{ y: 0 }}
              transition={{
                 duration: 1.2, 
                 delay: 0.2,
                repeat: Infinity, 
                repeatType: "reverse", 
                ease: "easeInOut", 
              }}
             
             className='rounded-2xl border-4 border-neutral-900 p-2'>
                 <SiSpringboot className='text-7xl text-green-400'/>
             </motion.div>
             <motion.div
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              transition={{
                duration: 2, 
                delay: 0.2,
                repeat: Infinity, 
                repeatType: "reverse", 
                ease: "easeInOut", 
              }} 
             className='rounded-2xl border-4 border-neutral-900 p-2'>
                 <GrMysql className='text-7xl text-blue-800'/>
             </motion.div>
             </motion.div>
         </div>
   )
 }

export default Skills
