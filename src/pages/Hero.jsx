import React from 'react'
import profile from '../assets/images/pp.png'
import { Typewriter } from 'react-simple-typewriter'
import {FiPhoneCall,FiMail} from 'react-icons/fi'

function Hero() {
  return (
    <div className='mb-10 flex justify-center items-center h-screen'>
        <div className="container mx-auto overflow-hidden">
            <div className='md:flex-1 animate__animated animate__bounceInLeft text-center md:text-start'>
                <h1 className='md:text-7xl text-4xl font-bold leading-loose text-center'>
                    <Typewriter words={['Hey, I am Faisal Salif a Web & Mobile App Developer.']}
                     loop={5}
                     cursor
                     cursorStyle='|'
                     typeSpeed={70}
                     deleteSpeed={50}
                     delaySpeed={2000}
                    />
                </h1>

                    
                
                {/* <p className='md:text-7xl text-4xl font-bold leading-relaxed'> &#128515;Hey, I am <br /> Faisal Salif <br />Web Developer </p> */}
                <p className='md:text-2xl py-5 text-center'>Hi, I'm Faisal a freelancer graphics and web developer from Ghana, I help brands turn their ideas into huge quality products.</p>
                <div className='py-10 text-center'>
                    <a href="tel:+233558628473" download><button className='bg-yellow-500 inline-flex gap-2 items-center md:px-10 md:py-5 p-3 text-black font-semibold text-2xl rounded-lg animate-bounce'> <FiPhoneCall/>Contact Me</button></a>
                </div>
            </div>
            {/* <div className='md:flex-1 animate__animated animate__bounceInRight'>
                <img src={profile} alt="" className='drop-shadow-xl'/>
            </div> */}
        </div>
    </div>
  )
}

export default Hero