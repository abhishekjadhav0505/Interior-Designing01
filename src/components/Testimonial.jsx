import React from 'react'
import { testimonial } from '../assets/assets'

const Testimonial = () => {
  return (
    <div className='container mx-auto  lg:px-12 w-full overflow-hidden  mb-6 py-20 overflow-y-hidden' id='testimonial'>
        <h1 className='text-3xl text-center font-semibold mb-16 mt-4 border-b-2 border-amber-800 inline-block md:mx-102 pb-2'>What Our Clients Say</h1>

        <div className='flex flex-wrap justify-center gap-6'>
            {testimonial.map((testimonials,index)=>(
                <div key={index} className='max-w-[350px] border border-gray-300 shadow-lg rounded-xl px-6 py-12 text-center '>
                    <img className='w-20 h-20 rounded-full mx-auto mb-4' src={testimonials.image} alt={testimonials.alt} />
                    <h2 className='text-xl text-gray-700 font-medium'>{testimonials.name}</h2>
                    <p className='text-gray-500 mb-4 text-sm'>{testimonials.title}</p>
                    
                    <p className='text-gray-600'>{testimonials.text}</p>
                </div>
            ))}
        </div>
      
    </div>
  )
}

export default Testimonial
