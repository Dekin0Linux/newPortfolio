import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


AOS.init();

function About() {
  return (
    <div>
      <div className="container mx-auto">
        <h4 className='font-bold text-6xl md:text-center py-5'>About Me</h4>
        <div className='flex flex-wrap py-10' >
          <div className='' data-aos="fade-right" data-aos-duration="4000">
            <img src="https://cdn3d.iconscout.com/3d/premium/thumb/web-developer-4788760-3988051.png" alt="" />
          </div>
          <div className='flex-1' data-aos="fade-left" data-aos-duration="4000">
            <p className='text-4xl font-semibold pb-5'>About 3 Years  Graphics & <br /> Web Development Experience.</p>
            <p className='text-xl md:leading-10'>I am a well crafted Graphics Designing & Web Developer. I have good of knowledge in front-end and back-end development as well as UX/UI Design. My objective is simply to be the best engineer that I can be and to contribute to the technology industry all that I know and can do.</p>
            <p className='text-xl md:leading-10'>
            I am dedicated to perfecting my craft by learning from more seasoned developers, remaining humble, and continuously making strides to learn all that I can about development. I believe that my understanding of problem-solving is also a skill that I have and will continue to contribute to my overall success as developer.
            </p>
          </div>

        </div>
        
      </div>
    </div>
  )
}

export default About