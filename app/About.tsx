import React from 'react'

function About() {
  return (
    <div className='h-screen flex flex-col relative items-center mx-auto justify-center'>
        <h3 className='absolute top-20 mx-auto uppercase font-bold tracking-widest opacity-30'>About</h3>
        <div className='max-w-3xl text-left flex flex-col gap-4 text-lg text-gray-100 z-10 bg-gray-800 rounded-3xl p-5 h-auto outline outline-2 outline-yellow-200'>
            <h2 className='font-bold text-white text-6xl mb-5'>Who am <span className='text-yellow-200'>I</span>?</h2>
            <p>
                Hello! My name is Lorent and I am a programmer based in Canada.
            </p>
            <p>
                {"I've been interacting with computers since I was a young kid which sparked a deep interest in technology. This led me to pursure a degree in Computer Science at the University of Guelph. Since then I have developed a great understanding in various programming concepts such as web development, data structures, cloud-computing, etc."}
            </p>
            <p>
                As of recently I have grown more passionate towards web development and am constantly learning and staying up-to-date with the latest technologies.
            </p>
            <p>
                I am excited to continue expanding my skill-set and grow as a programmer and see where my skills can take me!
            </p>
            <h3 className='font-bold text-yellow-200'>Skills</h3>
            <div className='flex flex-row flex-wrap pl-4 -mt-2'>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>React</li>
                <li>NextJs</li>
                <li>Express</li>
                <li>Tailwind</li>
                <li>Python</li>
                <li>C</li>
            </div>
            <a href='./LorentResume.pdf' className='mx-auto bg-yellow-200 p-1 px-2 rounded-full text-gray-900 flex flex-row gap-2' download>
                Resume
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
            </a>
        </div>
        <div className='w-full absolute top-auto h-[100px] left-0 bg-yellow-200 opacity-10 skew-y-12'></div>
    </div>
  )
}

export default About