import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FiYoutube } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className='bg-green-400 lg:h-[180px] h-[470px] mt-5 py-5 px-3 rounded-xl  mx-3 mb-0  '>
        <div className=' flex flex-col lg:flex-row lg:mx-20 lg:flex lg:justify-between lg:items-center '>
        <div className=' '>
            <h1 className='text-3xl text-bold mb-2'>Contact</h1>
            <div className='flex mb-1'>
            <div><FaLocationDot className='my-1'/></div>
            <div><h2>Location</h2></div>
            </div>
            <div className='flex mb-1'>
            <div><IoCall className='my-1'/></div>
            <div><h2>Call</h2></div>
            </div>

            <div className='flex mb-1'>
            <div><IoIosMail className='my-1'/></div>
            <div><h2>demo@gmail.com</h2></div>
            </div>

            
            
            
        </div>
        <div className=' lg:flex lg:flex-wrap  lg:mx-10 mx-2 my-10'>
                <p className=' text-xl text-bold text-black-900'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, quas quis! Distinctio delectus, ipsam est culpa cupiditate exercitationem quo neque vitae quos pariatur, veniam eveniet?</p>
                
            </div>
            <div className='  flex lg:flex-row gap-2 text-3xl mx-20 text-black mb-5'>
            <div><FaInstagram  className='hover:text-white hover:animate-bounce transition cursor-pointer'/></div>
            <FiYoutube className='hover:text-white hover:animate-bounce transition cursor-pointer'/>
            <CiLinkedin className='hover:text-white hover:animate-bounce transition cursor-pointer'/>
                
            </div>

            </div>
            
            
            
      
    </footer>
  )
}

export default Footer
