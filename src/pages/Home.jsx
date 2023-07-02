import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Links from './Links'
import About from './About'
import Resume from './Resume'
import Blogs from './Blogs'
import Portfolio from './Portfolio'
import Reviews from './Reviews'
import Who from './Who'
import Contact from './Contact'
import Footer from './Footer'

function Home() {
  return (
    <div className=' text-white'>
      <Navbar/>
      <Hero/>
      {/* <Links/> */}
      <About/>
      <Resume/>
      <Portfolio/>
      <Reviews/>
      <Blogs/>
      <Who/>
      <Contact/>
      <Footer/>


    </div>
  )
}

export default Home