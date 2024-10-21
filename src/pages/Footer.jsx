import React from 'react'
import call from '../assets/images/call.png'
import whatsapp from '../assets/images/whatsapp.png'
import {FaGithub,FaLinkedinIn,FaInstagram,FaWhatsapp} from 'react-icons/fa'



function Footer() {
  return (
    <div className='footerImg relative md:py-10' id='footer'>
        <div className="container  mx-auto md:py-48 py-20 z-50 text-white text-center">
          <h3 className='md:text-6xl text-3xl  font-bold leading-normal'>Have A Project In Mind? <br />   Let’s Get To Work.</h3>
          <div className='inline-flex p-10 gap-5 animate-bounce'>
            <a href="tel:+233558628473" target='_blank'><img src={call} alt="" width={'50px'}/></a>
            <a href="https://wa.me/+233261965074" target='_blank'><img src={whatsapp} alt="" width={'50px'}/></a>



          </div>
            <div className='flex mt-2 justify-center md:mt-0 md:gap-5 gap-2 w-full md:w-auto p-2 text-white text-2xl'>
                <a href="https://github.com/Dekin0Linux" className='bg-white text-black p-3 rounded-lg' target='_blank'><FaGithub/></a>
                <a href="https://www.linkedin.com/in/faisal-salif-89b02379/" className='bg-white text-blue-600 p-3 rounded-lg' target='_blank'><FaLinkedinIn/></a>
                <a href="https://instagram.com/dekingraphix" className='bg-white text-pink-700 p-3 rounded-lg' target='_blank'><FaInstagram/></a>
                <a href="https://wa.me/+233261965074" className='bg-white text-green-600 p-3 rounded-lg' target='_blank'><FaWhatsapp/></a>
            </div>
        </div>
    </div>
  )
}

export default Footer