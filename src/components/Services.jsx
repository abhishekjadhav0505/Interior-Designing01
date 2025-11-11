import React from 'react'
import { services } from '../assets/assets'

const Services = () => {
  return (
    <div id='services' className='py-20 bg-white'>
        <div className='container mx-auto px-6'>
            <h2 className='text-3xl font-semibold text-center mb-16 border-b-2 border-amber-800 inline-block md:mx-124 pb-2'>Our Services</h2>
            <span className='bg-'></span>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 max-w-5xl mx-auto '>
                {services.map((service,index)=>(
                    <div key={index} className='bg-white rounded-2xl p-6 shadow-2xl hover:-translate-y-2 transition duration-300 cursor-pointer'>
                        <div className='flex  flex-col items-center mb-4 gap-2'>
                            <service.icon className='w-12 h-12 text-amber-700 mr-6'/>
                            <h3 className='text-xl font-semibold '>{service.title}</h3>
                        </div>

                        <p className='text-gray-600 mb-4'>{service.description}</p>

                    </div>
                ))
                }
            </div>

        </div>

    </div>
  )
}

export default Services
