import React from 'react'
import {FiPhoneCall,FiMail} from 'react-icons/fi'
import {FaGithub,FaLinkedinIn,FaInstagram,FaWhatsapp} from 'react-icons/fa'

function Navbar() {
  return (
    <div className='md:pb-5 sticky top-0 w-full z-50 bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-70
     '>
        <div className='flex flex-wrap justify-between px-5'>
            <div className='md:flex flex-wrap gap-5 hidden'>
                <p className='inline-flex items-center gap-2  text-white'><i><FiMail/></i>phaisalsalif@gmail.com</p>
                <p className='inline-flex items-center gap-2  text-white'> <i><FiPhoneCall/></i> +233 55 862 8473</p>
            </div>

            <div className='flex justify-between mt-2 md:mt-0 md:gap-5 text-white w-full md:w-auto p-2 '>
                <a href="https://github.com/Dekin0Linux" target='_blank'><FaGithub/></a>
                <a href="https://www.linkedin.com/in/faisal-salif-89b02379/" target='_blank'><FaLinkedinIn/></a>
                <a href="https://instagram.com/dekingraphix" target='_blank'><FaInstagram/></a>
                <a href="https://wa.me/+233261965074" target='_blank'><FaWhatsapp/></a>
            </div>
        </div>

        <nav className=' flex flex-wrap justify-between items-center'>
            <div className='md:px-5 px-2 text-center block w-full md:w-auto'>
                <h1 className='md:text-3xl font-bold text-white' >Dekin<span className='text-pink-400'>Dev</span></h1>
            </div>
            <div className='text-white flex justify-between md:gap-10 gap-4 md:text-xl md:font-semibold md:px-5 p-2 w-full md:w-auto'>
                <a href="/" className='hover:text-sky-300'>Home</a>
                <a href="#about" className='hover:text-sky-300'>About Me</a>
                <a href="#resume" className='hover:text-sky-300'>Resume</a>
                <a href="#projects" className='hover:text-sky-300'>Portfolio</a>
                <a href="#footer" className='hover:text-sky-300'>Contact</a>
            </div>
        </nav>
    </div>
  )
}

export default Navbar