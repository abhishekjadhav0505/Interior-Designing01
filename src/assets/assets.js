import logo from './logo.jpg'
import Team from './Team.jpg'
import profile_img1 from './profile_img1.jpg'
import profile_img2 from './profile_img2.jpg'
import profile_img3 from './profile_img3.jpg'

import { IoColorPaletteSharp } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { FaBuilding } from 'react-icons/fa';
import {PiPencilRuler} from "react-icons/pi"
import {LuSofa} from "react-icons/lu"
import { FaLightbulb } from 'react-icons/fa';



export const assets={
    logo,
    Team,
    profile_img1,
    profile_img2,
    profile_img3

}


export const services = [
  {
    title: 'Residential Design',
    icon: FaHome ,
    description: 'Beautiful, functional spaces that reflect your personality and lifestyle.',
    
  },
  {
    title: 'Commercial Design',
    icon: FaBuilding ,
    description: 'Professional spaces that enhance productivity and impress clients.',
    
  },
  {
    title: 'Space Planning',
    icon: PiPencilRuler ,
    description: 'Optimized layouts that maximize your spaces potential.',
   
  },
  {
    title: 'Color Consultation',
    icon: IoColorPaletteSharp ,
    description: 'Expert advice on color schemes that create the perfect ambiance.',
  
  },
  {
    title: 'Furniture Selection',
    icon: LuSofa,
    description: 'Curated pieces that combine comfort, style, and functionality.',
   
  },
  {
    title: 'Lighting Design',
    icon:FaLightbulb ,
    description: 'Illuminate your space with the perfect lighting solutions.',
   
  }
];

export const testimonial= [
    {
        name: "Gopal Shetty",
        title: "Client",
        image: profile_img1,
        text: "Working with Beyond Vision Designs on our new office space was a pleasure. They delivered a design that perfectly balances functionality with aesthetic appeal. Our employees"
    },
    {
        name: "Saurabh Patil",
        title: "Client",
        image: profile_img2,
        text: "Beyond Vision Designs completely transformed our home. Their attention to detail and ability to understand our style was remarkable. We couldn't be happier with the results!"
    },
    {
        name: "Riya Patil",
        title: "Client",
        image: profile_img3,
        text: "The restaurant design exceeded all our expectations. They created an atmosphere that perfectly matches our brand and has significantly improved customer experience."
    }
   ];

   