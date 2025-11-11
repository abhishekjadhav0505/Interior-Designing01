import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SlCalender } from "react-icons/sl";

const Contact = () => {
  return (
 <div className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='contact'>
         <h1 className='text-2xl sm:text-4xl font-semibold mb-12 text-center border-b-2 border-amber-800 inline-block pb-2'>Contact Us</h1>

        <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto '>

           <div className='space-y-10 space-x-2 text-amber-800 mt-12'>

                    <div className='flex items-start'>
                        <div className='text-4xl mr-4 '>
                            <FaLocationDot/>
                        </div>
                            <h3 className='text-lg mb-2 text-center'>Shivar Chowk,Pimpri Chinchwad</h3>
                     </div>

                    <div className='flex items-start'>
                        <div className='text-4xl mr-4 '>
                            <FaPhone/>
                        </div>
                            <h3 className='text-lg mb-2'>+91 9403878090</h3>
                     </div>

                     <div className='flex items-start'>
                          <div className='text-4xl mr-4 '>
                              <MdEmail/>
                         </div>
                          <h3 className='text-lg mb-2'>bvisiondesigns@gmail.com</h3>
                     </div>

                     <div className='flex items-start'>
                          <div className='text-4xl mr-4 '>
                              <SlCalender/>
                           </div>
                              <h3 className='text-lg mb-2'>Mon-Fri: 9AM - 6PM</h3>
                     </div>


                </div>


          <div>
           <form  className='max-w-2xl mx-auto text-gray-600 pt-8'>
             <div className='flex flex-wrap'>
                <div className='w-full md:w-1/2 text-left'>
                Your Name
                <input className='w-full border border-gray-400 rounded py-3 px-4 mt-2' type="text" placeholder='Name' required/>
                </div>
                <div className='w-full md:w-1/2 text-left md:pl-4'>
                Your Email
                <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="text" placeholder='Email' required/>
                </div>
             </div>
             <div className='my-6 text-left'>
                Message
                <textarea className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none' name="Message" id="Message" required></textarea>
             </div>
        </form>
        <button className='bg-amber-700 text-white py-2 px-12 mb-10 rounded cursor-pointer mt-6'>
            Send Message
        </button>

       </div>
    </div>
 </div>
  )
}

export default Contact
