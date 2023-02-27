import React from 'react'
import { SocialIcon } from 'react-social-icons';
import Link from 'next/link'

function Projects() {
  return (
    <div className='h-screen flex flex-col relative items-center mx-auto justify-evenly text-left overflow-hidden'>
        <h3 className='absolute top-20 mx-auto uppercase font-bold tracking-widest opacity-30'>Projects</h3>
        <div className='w-full absolute top-auto h-[100px] left-0 bg-yellow-200 opacity-10 skew-y-12'></div>
        <div className='project-container w-full flex justify-center relative flex-wrap z-15'>
            <div className='pokedex-project p-4 m-5 rounded-3xl bg-gray-900 w-[20%] min-w-[274px] hover:scale-105 transition ease-in-out outline outline-2 outline-yellow-200'>
                <img src='./PokedexScreen.jpg' className='rounded-2xl'></img>
                <div className='tech-used flex flex-row justify-start gap-1 pt-2'>
                    <p className='bubble bg-blue-500'>React</p>
                    <p className='bubble bg-yellow-600'>Tailwind CSS</p>
                    <p className='bubble bg-purple-900'>REST API</p>
                </div>
                <h4 className='font-bold pt-2'>Pokedex</h4>
                <p>A tool used to view pictures and descriptions of Pokemon</p>
                <div className='flex flex-row gap-1 pt-2'>
                    <Link className='p-2 pt-3 rounded-full bg-white text-black font-bold' href="/pokedex" rel="noopener noreferrer" target="_blank">
                        Live View
                    </Link>
                    <SocialIcon url="https://github.com/aliulorent/portfolio" fgColor='black' bgColor='white'></SocialIcon>
                </div>
            </div>
            <div className='pokedex-project p-4 m-5 rounded-3xl bg-gray-900 w-[20%] min-w-[274px] hover:scale-105 transition ease-in-out outline outline-2 outline-yellow-200'>
                <img src='./FBXScreen.jpg' className='rounded-2xl'></img>
                <div className='tech-used flex flex-row justify-start gap-1 pt-2'>
                    <p className='bubble bg-green-700'>ThreeJS</p>
                </div>
                <h4 className='font-bold pt-2'>FBX Model Viewer</h4>
                <p>A tool used for viewing FBX models in your browser</p>
                <div className='flex flex-row gap-1 pt-2'>
                    <Link className='p-2 pt-3 rounded-full bg-white text-black font-bold' href="/cubedemo" rel="noopener noreferrer" target="_blank">Live View</Link>
                    <SocialIcon url="https://github.com/aliulorent/portfolio" fgColor='black' bgColor='white'></SocialIcon>
                </div>
            </div>
            <div className='pokedex-project p-4 m-5 rounded-3xl bg-gray-900 w-[20%] min-w-[274px] hover:scale-105 transition ease-in-out outline outline-2 outline-yellow-200'>
                <img src='./PortfolioScreen.jpg' className='rounded-2xl'></img>
                <div className='tech-used flex flex-row justify-start gap-1 pt-2'>
                    <p className='bubble bg-blue-700'>NextJS</p>
                    <p className='bubble bg-yellow-600'>Tailwind CSS</p>
                </div>
                <h4 className='font-bold pt-2'>Personal Portfolio</h4>
                <p>{"My own personal portfolio (You're looking at it right now)"}</p>
                <div className='flex flex-row gap-1 pt-2'>
                    <Link className='p-2 pt-3 rounded-full bg-white text-black font-bold' href="/" rel="noopener noreferrer" target="_blank">Live View</Link>
                    <SocialIcon url="https://github.com/aliulorent/portfolio" fgColor='black' bgColor='white'></SocialIcon>
                </div>
            </div>
            <div className='pokedex-project p-4 m-5 rounded-3xl bg-gray-900 w-[20%] min-w-[274px] hover:scale-105 transition ease-in-out outline outline-2 outline-yellow-200'>
                <img src='./GPXScreen.jpg' className='rounded-2xl'></img>
                <div className='tech-used flex flex-row justify-start gap-1 pt-2'>
                    <p className='bubble bg-blue-900'>C</p>
                    <p className='bubble bg-orange-600'>Javascript</p>
                    <p className='bubble bg-red-800'>Node</p>
                    <p className='bubble bg-purple-900'>HTML</p>
                </div>
                <h4 className='font-bold pt-2'>GPX Parser - Outdated</h4>
                <p>{"A full stack app for parsing GPX files and retrieving data"}</p>
                <div className='flex flex-row gap-1 pt-2'>
                    <SocialIcon url="https://github.com/aliulorent/gpx-parser" fgColor='black' bgColor='white'></SocialIcon>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects