import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div  className='min-h-[600px]  bg-cover bg-center items-center w-full overflow-hidden rounded-2xl relative mt-2' style={{backgroundImage: "url('/header_img.png')"}}  id='home'>
    
    <div className='absolute container text-center mx-auto py-34 px-6 md:px-20 lg:px-32 text-white bg-black/50 inset-0'>
        <h2 className='text-2xl sm:text-6xl md:text-[60px] inline-block max-w-3xl font-semibold pt-20 text-shadow-lg'>Transform Your Space Into Art</h2>
        <p className='pt-2 text-white text-xl mb-8 mt-1'>Premium interior design solutions tailored to your unique style and needs.</p>
        <a className='text-lg bg-amber-700 text-white py-2 px-8 cursor-pointer rounded-xl ' href='#contact'>  Get A Free Consultion</a>
        
    </div>
    </div>
  )
}

export default Home
