import React from 'react'
import {FiPhoneCall,FiMail} from 'react-icons/fi'
import {FaGithub,FaLinkedinIn,FaInstagram,FaWhatsapp} from 'react-icons/fa'

function Navbar() {
  return (
    <div className='container mx-auto pb-5 sticky top-0 z-50'>
        <div className='flex justify-between py-5'>
            <div className='inline-flex gap-5'>
                <p className='inline-flex items-center gap-2 text-xl text-yellow-400'><i><FiMail/></i>phaisalsalif@ggmail.com</p>
                <p className='inline-flex items-center gap-2 text-xl text-yellow-400'> <i><FiPhoneCall/></i> +233 55 862 8473</p>
            </div>
            <div className='inline-flex gap-5 text-2xl items-center'>
                <a href="" target='_blank'><FaGithub/></a>
                <a href="" target='_blank'><FaLinkedinIn/></a>
                <a href="" target='_blank'><FaInstagram/></a>
                <a href="" target='_blank'><FaWhatsapp/></a>
            </div>
        </div>

        <nav className=' bg-white rounded-lg flex justify-between items-center '>
            <div className='p-5'>
                <h1 className='text-3xl font-bold text-black' >Dekin <span className='text-pink-400'>Dev</span></h1>
            </div>
            <div className='text-black flex gap-10 text-xl font-semibold p-5'>
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