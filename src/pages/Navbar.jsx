import React from 'react'
import {FiPhoneCall,FiMail} from 'react-icons/fi'
import {FaGithub,FaLinkedinIn,FaInstagram,FaWhatsapp} from 'react-icons/fa'

function Navbar() {
  return (
    <div className='md:pb-5 sticky top-0 w-full z-50 bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-70
     '>
        <div className='flex flex-wrap justify-between p-5'>
            <div className='inline-flex gap-5'>
                <p className='inline-flex items-center gap-2  text-white'><i><FiMail/></i>phaisalsalif@ggmail.com</p>
                <p className='inline-flex items-center gap-2  text-white'> <i><FiPhoneCall/></i> +233 55 862 8473</p>
            </div>
            <div className='inline-flex md:gap-5 items-center text-white'>
                <a href="" target='_blank'><FaGithub/></a>
                <a href="" target='_blank'><FaLinkedinIn/></a>
                <a href="" target='_blank'><FaInstagram/></a>
                <a href="" target='_blank'><FaWhatsapp/></a>
            </div>
        </div>

        <nav className=' flex flex-wrap justify-between items-center'>
            <div className='md:p-5 px-2'>
                <h1 className='md:text-3xl font-bold text-white' >Dekin<span className='text-pink-400'>Dev</span></h1>
            </div>
            <div className='text-white flex md:gap-10 gap-5 md:text-xl font-semibold md:p-5 p-2'>
                <a href="">Home</a>
                <a href="">About Me</a>
                <a href="">Resume</a>
                <a href="">Portfolio</a>
                <a href="">Contact</a>
            </div>
        </nav>
    </div>
  )
}

export default Navbar