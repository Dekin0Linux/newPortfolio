import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {FaDownload} from 'react-icons/fa'


AOS.init();

function About() {
  return (
    <div className='bg-[#050F25]' id='about'>
      <div className="container mx-auto">
        <h4 className='font-bold text-6xl text-center py-3'>About Me</h4>
        <div className='flex flex-wrap items-center py-2' >

          <div className='md:flex-1' data-aos="fade-right" data-aos-duration="4000">
            <img src="https://cdn3d.iconscout.com/3d/premium/thumb/professional-website-developer-6343298-5242458.png" alt="" className='drop-shadow-2xl' width={'100%'}/>
          </div>

          <div className='md:flex-1 md:text-start p-5 md:p-0' data-aos="fade-left" data-aos-duration="4000">
            <p className='text-4xl text-center md:text-start font-semibold pb-5 text-yellow-400 '>Web & Mobile App Development Experience.</p>

            <p className='text-xl md:leading-10 italic '>I am a well crafted Web & Mobile App Developer. I have good knowledge in front-end and back-end development as well as Mobile developement with React Native. My objective is simply to be the best engineer that I can be and to contribute to the technology industry all that I know and can do.</p>
            <p className='text-xl md:leading-10 italic pb-10'>
            I am dedicated to perfecting my craft by learning from more seasoned developers, remaining humble, and continuously making strides to learn all that I can about development. I believe that my understanding of problem-solving is also a skill that I have and will continue to contribute to my overall success as developer.
            </p>
            <div>
              <a href="../assets/CV-2023.pdf" download className='bg-yellow-400 px-10 py-5 text-black font-bold md:text-xl rounded-md inline-flex items-center gap-5 hover:shadow-2xl'><FaDownload/>Download CV</a>
            </div>
          </div>

        </div>
        
      </div>
    </div>
  )
}

export default About