"use client"
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

function Hero() {

    const [text, count] = useTypewriter({
        words:[
            "Web Developer",
            "Software Engineer",
            "Programmer"
        ],
        loop: true,
    })

  return (
    <div className='flex flex-col h-screen items-center justify-center relative text-6xl text-center gap-2 overflow-hidden'>
        <h1 className='font-bold object-cover'>
            <span>Hi, I am Lorent</span>
        </h1>
        <h3 className='text-3xl'>
            <span>I am a <span className='text-yellow-200'>{text}</span></span>
            <Cursor cursorColor='white'/>
        </h3>
        <div className='absolute m-auto circle border rounded-full h-[400px] w-[400px] animate-ping'></div>
    </div>
  )
}

export default Hero