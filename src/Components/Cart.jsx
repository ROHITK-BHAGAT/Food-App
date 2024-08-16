import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";
import ItemCart from './itemCart';
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const [activeCart, setactiveCart] = useState(false);

  const cartItems = useSelector((state) => state.cart.cart);
  const totalQty = cartItems.reduce((totalQty,item)=>totalQty + item.qty,0);
  const totalPrice=cartItems.reduce((total,item)=>total+item.qty * item.price,0)

  const navigate=useNavigate();

  return (
    <>
      <div className={`fixed right-0 h-full top-0 w-full lg:w-[20vw] p-5 bg-white ${activeCart ? "translate-x-0" : "translate-x-full"} transition-all duration-500 z-50`}>
        <div className='flex justify-between items-center'>
          <span className='text-xl font-bold text-gray-800'>My Order</span>
          <IoMdClose onClick={() => setactiveCart(!activeCart)} className='border-2 border-gray-600 text-gray-600 font-bold p-1 text-xl rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer' />

        </div>

        {cartItems.length>0 ? cartItems.map((food) => {
            return( <ItemCart key={food.id} id={food.id} name={food.name} price={food.price} img={food.img} qty={food.qty} />
            );
          }): <h2 className='text-center text-xl font-semibold text-gray-800'>Your Cart is Empty</h2>}
        





        <div className='absolute bottom-0 '>
          <h3 className='font-semibold text-gray-800 '>Item:{totalQty}</h3>
          <h3 className='font-semibold text-gray-800 '>Total Amount:{totalPrice}</h3>
          <hr className='w-[90vw] lg:w-[18vw] my-2' />
          <button onClick={()=> navigate("/success")} className='bg-green-500 font-bold px-3 text-white py-2 rounded-lg mb-5  w-[90vw] lg:w-[18vw]'>Checkout</button>
        </div>

      </div>

      <FaShoppingCart onClick={() => setactiveCart(!activeCart)} className={`rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-4 right-4 cursor-pointer ${totalQty>0 && "lg:fill-white lg:bg-green-400  animate-bounce delay-100 transition-all"}`} />


    </>
  )
}

export default Cart
