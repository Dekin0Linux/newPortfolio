import React from 'react'
import call from '../assets/images/call.png'
import whatsapp from '../assets/images/whatsapp.png'



function Footer() {
  return (
    <div className='footerImg relative md:py-10'>
        <div className="container  mx-auto md:py-48 py-20 z-50 text-white text-center">
          <h3 className='md:text-6xl text-3xl  font-bold leading-normal'>Have A Project In Mind? <br />   Let’s Get To Work.</h3>
          <div className='inline-flex p-10 gap-5 animate-bounce'>
            <a href="tel:+233558628473" target='_blank'><img src={call} alt="" width={'50px'}/></a>
            <a href="https://wa.me/+233261965074" target='_blank'><img src={whatsapp} alt="" width={'50px'}/></a>
          </div>
        </div>
    </div>
  )
}

export default Footer