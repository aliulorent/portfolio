"use client"
import React from 'react'
import {motion} from 'framer-motion'
import Link from 'next/link'

function Header() {
  return (
    <motion.div 
    initial={{
        y:-50,
        opacity:0,
    }}
    animate={{
        y:0,
        opacity:1,
    }}
    transition={{
        duration:1,
    }}
    className='sticky top-0 p-4 flex flex-row items-start justify-between max-w-7xl mx-auto z-20'>
        <div className='flex flex-row items-center gap-3'>
            <a href="#hero-section">
                <button className='text-white font-bold hover:text-yellow-200 cursor-pointer'>Home</button>
            </a>
            <a href="#about-section">
                <button className='text-white font-bold hover:text-yellow-200 cursor-pointer'>About</button>
            </a>
            <a href="#projects-section">
                <button className='text-white font-bold hover:text-yellow-200 cursor-pointer'>Projects</button>
            </a>
        </div>
        <a href="#contact-section">
            <button className='text-white font-bold hover:text-yellow-200 cursor-pointer'>Contact</button>
        </a>
    </motion.div>
  )
}

export default Header