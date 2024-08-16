import React, { useEffect, useState } from 'react'
import { ScaleLoader } from 'react-spinners'

const Success = () => {
  const [loading,setLoading]=useState(true);
  useEffect(() => {
    setTimeout(()=>{
      setLoading(false);
    },3000);
  },[]);
    
  
    

  
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-green-400'>
      {
        loading ?  <ScaleLoader color="#000000" /> : <div>
      
        <h2 className='text-3xl font-semibold mb-4 text-center text-black'>Order Successfull!</h2>
        <p>Your order has been successfully placed!</p>
        </div>
      }
      
    </div>
  )
}

export default Success
