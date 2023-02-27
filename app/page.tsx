import React from 'react'
import Header from './Header'
import Hero from './Hero'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'

function HomePage() {
  return (
    <div className='bg-gray-800 h-screen home-container text-white snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-yellow-200 scroll-smooth'>
      <Header/>
      <section id="hero-section" className='snap-start'>
      <Hero/>
      </section>
      <section id="about-section" className='snap-start'>
      <About/>
      </section>
      <section id="projects-section" className='snap-start'>
      <Projects/>
      </section>
      <section id="contact-section" className='snap-start'>
      <Contact/>
      </section>
    </div>
  )
}

export default HomePage