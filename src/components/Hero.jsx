import React from 'react'
import { HERO_CONTENT } from './../constants/index';
import ProfilePic from '../assets/Profile.jpg';
const Hero = () => {
    return ( 
    <div className='border-b border-neutral-800 pb-24 lg:mb-35'>
        <div className="flex flex-wrap lg:flex-nowrap">
            <div className='w-full lg:w-1/2 flex justify-center lg:justify-start'>
            <div className="flex flex-col items-center lg:items-start mx-4 ">
                <h1 className='pb-6 text-4xl font-thin tracking-tight lg:mt-16 lg:text-6xl'>
                    Amr Ahmed
                    </h1>
                    <span className='bg-gradient-to-r from-pink-500 via-slate-600
                    to-purple-700 bg-clip-text text-2xl tracking-tight text-transparent'>Full Stack Developer</span>
                    <p className='my-2 max-w-xl py-6 font-light tracking-tight'>{HERO_CONTENT}</p>
            </div>
            </div>
            <div className='w-full lg:w-1/2 flex justify-center lg:justify-middle lg:p-7'>
            <div className='overflow-hidden relative'>
                <img src={ProfilePic} alt="Amr Ahmed" className="relative z-10 mx-auto rounded-xl lg:max-w-xs" />
            </div>
            </div>
        </div>
    </div> );
}
 
export default Hero;