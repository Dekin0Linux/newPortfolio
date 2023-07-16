import React from 'react'
import profile from '../assets/images/pp.png'
import { Images } from '../assets/images/images'


const Experience=({position,company,date})=>{
  return(
    <div className='flex justify-between border-b-4 py-5'>
      <div >
        <p className='font-semibold text-2xl'>{position}</p>
        <p className='text-xl'>{company}</p>
      </div>
      <button className='bg-yellow-400 md:px-4 md:py-1 p-2 rounded-lg text-black font-semibold'>{date}</button>
    </div>
  )
}

function Resume() {
  return (
    <div className='bg-[#050F25] py-10'>
      <div className="container mx-auto border-yellow-400 border-2 p-10 rounded-xl bg-[#091530]">
        <p className='font-bold text-4xl py-5'>Resume</p>
        {/* top side */}
        <div className='flex flex-wrap md:py-20'>
          <div className='md:flex-1'>
            <div className='border-b-4 py-5'>
              <p className='font-semibold text-4xl'>Faisal Salifu</p>
              <small className='text-xl '>Web Developer</small>
            </div>
            <p className='text-xl py-5 text-yellow-400'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis fuga repellat illum aliquam beatae praesentium dolor quod modi nam enim doloremque obcaecati, dicta atque quibusdam eaque ipsum! Expedita, consectetur perspiciatis!
            </p>
          </div>
          <div className='md:flex-1'>
            <img src={profile} alt="myImage" className=''/>
          </div>

          <div className='flex-1'>
            <Experience position={'Frontend Dev.'} company={'Nacasky Company'} date={'Current'}/>
            <Experience position={'Fullstack Dev.'} company={'Samak Tachnology'} date={'2021-2022'}/>
            <Experience position={'Frontend Dev'} company={'Viqx GH'} date={'2019-2020'}/>
          </div>
        </div>
        {/* end of top side */}

        {/* next box */}
        <div className="flex flex-wrap gap-3">
          <div className='md:flex-1'>
            <p className='text-2xl font-semibold pb-4 border-b-4 border-white'>Skills</p>
            <div>
              <img src={Images.html} alt="icond here" />
            </div>
          </div>

          <div className='md:flex-1'>
            <p className='text-2xl font-semibold pb-4 border-b-4 border-white'>Tools I Use!</p>
            <div className='md:flex flex-wrap gap-2'>
                <img src={Images.html} alt="icon here" />
            </div>
          </div>
        </div>
        {/* End of next box */}

        {/* CLients section */}
        <div>

        </div>

      </div>
    </div>
  )
}

export default Resume