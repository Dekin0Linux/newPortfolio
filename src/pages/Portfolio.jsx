import React from 'react'
import myryd from '../assets/images/myryde.jpg'
import cineman from '../assets/images/cineman.jpg'
import store from '../assets/images/store.jpg'
import weather from '../assets/images/weatherapp.jpg'
import texttospeech from '../assets/images/texttospeech.jpg'
import instagram from '../assets/images/instagramClone.jpg'

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

          <Projects title={'Ecommerce App'} url={'https://faisal-ecommerce.netlify.app/'} img={store} description={'A simulated eCommerce website powered by a fake API. It provides an interactive experience where users can explore product categories, view product details, add items to their shopping carts, and proceed through a simulated checkout process. This project serves as a valuable demonstration of eCommerce functionalities, offering insights into product browsing, selection, and cart management for developers and enthusiasts interested in building eCommerce platforms.'}/>

          <Projects title={'Weather App'} url={'https://faisal-weatherapp.netlify.app/'} img={weather} description={"A practical and user-friendly weather application that provides up-to-date weather information. It allows users to search for specific locations and instantly obtain detailed weather forecasts, including temperature, humidity, wind speed, and conditions. The app displays visually appealing icons and backgrounds to represent different weather conditions, enhancing the overall user experience. With its intuitive design and accurate weather data, this app proves to be a valuable tool for users seeking reliable weather information on the go."}/>

          <Projects title={'Text To Speech'} url={'https://faisal-texttospeech.vercel.app/'} img={texttospeech} description={"The text-to-speech app I created is a straightforward and efficient tool that transforms written text into clear and audible speech. With a minimalist design, the app offers essential functionalities such as play, pause, clear, and continue. Users can easily input text and play it back as natural-sounding audio. Whether for educational purposes, accessibility needs, or simply for convenience, this app provides a reliable solution for converting text into spoken content in a hassle-free manner."}/>

          <Projects title={'Instagram Clone'} url={'https://www.linkedin.com/feed/update/urn:li:activity:7040774113950367744/?originTrackingId=%2FeRCkKO3Rd2yWEFZlsNTag%3D%3D'} img={instagram} description={"A practical and user-friendly weather application that provides up-to-date weather information. It allows users to search for specific locations and instantly obtain detailed weather forecasts, including temperature, humidity, wind speed, and conditions. The app displays visually appealing icons and backgrounds to represent different weather conditions, enhancing the overall user experience. With its intuitive design and accurate weather data, this app proves to be a valuable tool for users seeking reliable weather information on the go."}/>

        </div>
      </div>
    </div>
  )
}

export default Portfolio