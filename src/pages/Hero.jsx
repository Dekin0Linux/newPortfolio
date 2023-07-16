import React from 'react'
import profile from '../assets/images/pp.png'

function Hero() {
  return (
    <div className='mb-10'>
        <div className="container mx-auto flex flex-wrap items-center pt-10 overflow-hidden">
            <div className='md:flex-1 animate__animated animate__bounceInLeft text-center md:text-start'>
                <p className='md:text-7xl text-4xl font-bold leading-relaxed'> &#128515;Hey, I am <br /> Faisal Salif <br />Web Developer </p>
                <p className='md:text-2xl py-5'>Hi, I'm Faisal a freelancer graphics and web developer from Ghana, I help brands turn their ideas into huge quality products.</p>
                <div className='py-10 '>
                    <a href="#" download><button className='bg-yellow-500 md:px-10 md:py-5 p-3 text-black font-semibold text-2xl rounded-lg animate-bounce'>Hire Me</button></a>
                </div>
            </div>
            <div className='md:flex-1 animate__animated animate__bounceInRight'>
                <img src={profile} alt="" className='drop-shadow-xl'/>
            </div>
        </div>
    </div>
  )
}

export default Hero