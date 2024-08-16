import React, { useEffect, useState } from 'react'
import { FaArrowCircleUp } from "react-icons/fa";


const GoToTop = () => {
    const [isVisible, setIsVisible]=useState(false);

    const goToBtn=()=>{
        window.scrollTo({top:0, left:0, behavior:"smooth"})
    }
    const listenToScroll =()=>{
        
        let heightToHidden=250;
        const winScroll=document.body.scrollTop || document.documentElement.scrollTop;
        if(winScroll > heightToHidden){
            setIsVisible(true);
        }else{
            setIsVisible(false);
        }
    }

    useEffect(() => {
      window.addEventListener("scroll", listenToScroll);
    }, []);
    
  return (
    
        
    <div  onClick={goToBtn} className=''>
        {isVisible && (
      <FaArrowCircleUp className='animate-bounce rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-4 left-4 cursor-pointer'/>
    )}
    </div>
        
    
  )
}

export default GoToTop
