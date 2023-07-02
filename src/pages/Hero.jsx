import React from 'react'
import profile from '../assets/images/pp.png'

function Hero() {
  return (
    <div className='mb-10'>
        <div className="container mx-auto flex items-center pt-10 overflow-hidden">
            <div className='flex-1 animate__animated animate__bounceInLeft'>
                <p className='text-7xl font-bold leading-relaxed'>&#128515; , Hey, I am <br /> Faisal Salif <br />Web Developer </p>
                <p className='text-2xl py-5'>Hi, I'm Faisal a freelancer graphics and web developer from Ghana, I help brands turn their ideas into huge quality products.</p>
                <div className='py-10 '>
                    <button className='bg-yellow-500 px-10 py-5 text-black font-semibold text-2xl rounded-lg animate-bounce'>Hire Me</button>
                </div>
            </div>
            <div className='flex-1 animate__animated animate__bounceInRight'>
                <img src={profile} alt="" className='drop-shadow-xl'/>
            </div>
        </div>
    </div>
  )
}

export default Hero