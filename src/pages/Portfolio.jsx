import React from 'react'
import myryd from '../assets/images/myryde.jpg'
import cineman from '../assets/images/cineman.jpg'

function Projects({title,img,description,url}){
  return(
    <div className='bg-white p-3 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 shadow-lg'>
      <div className='object-contain overflow-hidden rounded-lg shadow'>
        <a href={url} target='_blank'>
          <img src={img} alt="" />
        </a>
        <div className='py-5'>
          <h4 className='text-white font-bold md:text-2xl'>{title}</h4>
          <p className='text-white'>
            {description}
          </p>
        </div>
      </div>
    </div>

  )
}

function Portfolio() {
  return (
    <div className='container mx-auto'>
      <div className='my-10 px-3 md:px-0'>
        <h3 className='font-bold md:text-6xl text-3xl text-center py-3 leading-normal'>Showcasing Few Of My Projects </h3>
        <div className='grid lg:grid-cols-3 gap-5 py-5'>

          <Projects title={'Myryd'} url={'https://myryd.onrender.com'} img={myryd} description={'MyRyd is an innovative bus ticket project designed to revolutionize the way we travel by bus. With its user-friendly mobile application, MyRyd aims to provide a seamless and convenient ticketing experience for passengers. By leveraging advanced technologies such as real-time tracking, e-ticketing, and secure payment options.'}/>

          <Projects title={'Cineman'} url={'https://cineman-app.netlify.app/'} img={cineman} description={'Cineman is an exhilarating streaming platform that delivers thrills and chills right to your screen. With its vast collection of gripping thrillers, users can immerse themselves in suspenseful narratives, heart-pounding action, and mind-bending plot twists. Cineman offers a captivating streaming experience that will keep you on the edge of your seat, ready for the next thrilling adventure.'}/>

          <Projects title={'Myryd'} url={'https://cinemain-app.netlify.com'} img={myryd} description={'Cineman is an exhilarating streaming platform that delivers thrills and chills right to your screen. With its vast collection of gripping thrillers, users can immerse themselves in suspenseful narratives, heart-pounding action, and mind-bending plot twists. Cineman offers a captivating streaming experience that will keep you on the edge of your seat, ready for the next thrilling adventure.'}/>

        </div>
      </div>
    </div>
  )
}

export default Portfolio