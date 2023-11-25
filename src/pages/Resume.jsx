import React from 'react'
import profile from '../assets/images/pp.png'

import html from '../assets/images/html.png'
import css from '../assets/images/css-3.png'
import js from '../assets/images/js.png'
import react from '../assets/images/atom.png'
import bs from '../assets/images/bootstrap.png'
import php from '../assets/images/php.png'
import python from '../assets/images/python.png'
import node from '../assets/images/node-js.png'
import tailwind from '../assets/images/tailwind.png'
import mongodb from '../assets/images/mongodb.png'
import github from '../assets/images/github.png'
import git from '../assets/images/git.png'
import photoshop from '../assets/images/photoshop.png'
import vscode from '../assets/images/visual-studio.png'
import mysql from '../assets/images/mysql.png'
import linux from '../assets/images/linux.png'





const Experience=({position,company,date})=>{
  return(
    <div className='flex justify-between border-b-4 py-5 items-start'>
      <div >
        <p className='font-semibold text-2xl'>{position}</p>
        <p className='text-xl'>{company}</p>
      </div>
      <span className='bg-yellow-400 md:px-4 py-2  rounded-lg text-black font-semibold'>{date}</span>
    </div>
  )
}

function Resume() {
  return (
    <div className='bg-[#050F25] py-10  '>
      <div className="container mx-auto border-yellow-400 border-2 md:p-10 p-5 rounded-xl bg-[#091530] hero-img">
        <p className='font-bold text-4xl py-5'>Resume</p>
        {/* top side */}
        <div className='flex flex-wrap md:py-20'>
          <div className='md:flex-1'>
            <div className='border-b-4 py-5'>
              <p className='font-semibold text-4xl'>Faisal Salifu</p>
              <small className='text-xl '>Web Developer</small>
            </div>
            <p className='text-md py-5 '>
            I am a developer proficient with 3 years of experience in full-stack development, with
            a strong focus on problem-solving. <br /><br />
            My objective is simply to be good engineer that I can be and to contribute to the
            technology industry with all that I know and can do.
            </p>
          </div>
          <div className='md:flex-1' >
            <img src={profile} alt="myImage" className=''/>
          </div>

          <div className='flex-1'>
            <Experience position={'Frontend Dev.'} company={'Eganow'} date={'2023'}/>
            <Experience position={'Frontend Dev.'} company={'Nacasky Company'} date={'2023'}/>
            <Experience position={'Fullstack Dev.'} company={'Samak Tachnology'} date={'2021-2022'}/>
            <Experience position={'Frontend Dev'} company={'Viqx GH'} date={'2019-2020'}/>
          </div>
        </div>
        {/* end of top side */}

        {/* next box */}
        <div className="flex flex-wrap md:gap-10">

          <div className='md:flex-1'>
            <p className='text-2xl font-semibold pb-4 border-b-4 my-4 border-white text-center md:text-start'>Skills</p>
            <div className='flex justify-between flex-wrap md:gap-10 gap-5'>
              <img src={html} alt="icond here" width={'80px'}/>
              <img src={css} alt="icond here" width={'80px'}/>
              <img src={js} alt="icond here" width={'80px'}/>
              <img src={react} alt="icond here" width={'80px'}/>
              <img src={bs} alt="icond here" width={'80px'}/>
              <img src={php} alt="icond here" width={'80px'}/>
              <img src={python} alt="icond here" width={'80px'}/>
              <img src={node} alt="icond here" width={'80px'}/>
              <img src={tailwind} alt="icond here" width={'80px'}/>
              <img src={github} alt="icond here" width={'80px'} />
              <img src={mysql} alt="icond here" width={'80px'} />
              <img src={mongodb} alt="icond here" width={'80px'} />
            </div>
          </div>

          <div className='md:flex-1'>
            <p className='text-2xl font-semibold pb-4 border-b-4 border-white my-4 text-center md:text-start'>Tools I Use!</p>
            <div className='flex justify-between flex-wrap md:gap-10 gap-3'>
              <img src={git} alt="icond here" width={'80px'} className=''/>
              <img src={photoshop} alt="icond here" width={'80px'} className=''/>
              <img src={vscode} alt="icond here" width={'80px'} className=''/>
              <img src={linux} alt="icond here" width={'80px'} className=''/>
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