import React from 'react'
import { useDispatch } from 'react-redux'
import { setSearch } from '../redux/slices/SearchSlice'




const Navbar = () => {

  const dispatch =useDispatch();
  return (

    <nav className='bg-green-500 h-[350px] mt-5 rounded-xl py-3 mx-3 mb-10   '>
      
      <div className='h-[345px] flex items-center justify-between '>
        <div><img className='lg:w-[10vw] lg:mx-5 hover:animate-spin'  src='pizza1.png'/></div>
        
        <div className='h-[340px] '>
        <div className='flex items-center  '>
          <div className='hover:motion-safe:animate-spin'><img className=' lg:w-[10vw]   transform hover:translate-x-full duration-1000 transition '  src='pizza1.png'/> </div>
          <div className='hidden lg:block'><h1 className='lg:text-3xl px-20 font-bold'>Order your favourite food here</h1>
          <h2 className='mx-5 mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, dolorem!</h2></div></div>
        
        <div><input onChange={(e)=>dispatch(setSearch(e.target.value))} className="   p-3 border border-gray-400 text-sm rounded-lg outline-none mt-5 lg:mt-0  lg:w-[45vw]" type="search" name="search" id="" placeholder="Search here" autoComplete="off"/></div>
        
        <h1 className=' lg:text-3xl text-2xl py-2 text-center font-bold text-black lg:py-5'>Flavoro Foods</h1>
        
        </div>
        <div><img className='lg:w-[10vw] lg:mx-5 hover:animate-spin transition'  src='pizza1.png'/></div>
        
      </div>
      
      

    </nav>
    

      
        
      
      

       
    
  )
}

export default Navbar
