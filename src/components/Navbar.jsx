import React from 'react'
import { assets } from '../assets/assets'
import { useState } from 'react'


const Navbar = () => {

     const[item,setItem]=useState("home")

  return (

   
    <div className='w-full h-16 sticky left-0 top-0  flex flex-row z-10 bg-white pt-2'>
        <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 '>

     <img className='w-[150px] h-[45px] md:w-[250px] md:h-[55px] text-center  ' src={assets.logo} alt="" /> 

        <ul className='hidden md:flex gap-7 text-black  text-lg'>
            <a href="#home"  onClick={()=> setItem("home")} className={item==="home"?"pb-2 border-b-2 border-red-800":""}>Home</a>
            <a href="#services" onClick={()=> setItem("services")} className={item==="services"?"pb-2 border-b-2 border-red-800":""}>Services</a>
            <a href="#about" onClick={()=> setItem("about")} className={item==="about"?"pb-2 border-b-2 border-red-800":""}>About</a>
            <a href="#testimonial" onClick={()=> setItem("testimonial")} className={item==="testimonial"?"pb-2 border-b-2 border-red-800":""}>Testimonial</a>
            <a href="#contact" onClick={()=> setItem("contact")} className={item==="contact"?"pb-2 border-b-2 border-red-800":""}>Contact</a>
        </ul>
    

             



        </div>

        

        
      
    </div>
  )
}

export default Navbar
