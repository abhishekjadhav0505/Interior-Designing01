import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className='container mx-auto pt-10' id='about'>
        <h1 className='text-3xl font-semibold text-center mb-8 mt-6  border-b-2 border-amber-800 inline-block md:mx-134 pb-2'>About Us</h1>
    <div className='container flex flex-col md:flex-row  items-center gap-20 '>
        <div className='flex flex-col justify-around space-y-30'>
        <p className='text-lg max-w-200 '>
        Beyond Vision Designs was founded in 2015 with a vision to transform ordinary spaces into extraordinary experiences. Our team of passionate designers brings together diverse perspectives and a shared commitment to excellence.
        We believe that great design should be accessible to everyone. Whether you're looking to refresh a single room or design an entire property, we approach each project with the same level of creativity and attention to detail.
        </p>
            <div className=' container md:flex  mt-10 gap-4 '>
                <div className='flex flex-col px-10 py-6 shadow-lg'>
                    <span className='text-center text-4xl font-bold text-amber-800 '>40</span>
                    <p className='text-center text-gray-600 pt-2'>Projects Completed</p>
                </div>
                <div className='flex flex-col px-8 py-4 shadow-lg'>
                    <span className='text-center text-4xl font-bold text-amber-800'>10</span>
                    <p className='text-center text-gray-600 pt-2'>Years Of Experience</p>
                </div>
                <div className='flex flex-col px-8 py-4 shadow-lg'>
                   <span className='text-center text-4xl font-bold text-amber-800'>30</span>
                    <p className='text-center text-gray-600 pt-2'>Happy Clients</p>
                </div >
                <div className='flex flex-col px-8 py-4 shadow-lg'>
                   <span className='text-center text-3xl font-bold text-amber-800'>4</span>
                    <p className='text-center text-gray-600 pt-2'>Awards Won</p>
                </div>

            </div>

        </div>

        <div >
            <img className='h-135 max-w-100' src={assets.Team} alt="" />
        </div>

      
    </div>
    </div>
  )
}

export default About
