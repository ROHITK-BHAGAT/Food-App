import React from 'react'
import Navbar from '../Components/Navbar'
import CategoryMenu from '../Components/CategoryMenu'
import Fooditems from '../Components/Fooditems'
import Cart from '../Components/Cart'
import Footer from '../Components/Footer'
import GoToTop from '../Components/GoToTop'


const Home = () => {
  return (
    <>
    
    <Navbar/>
    
    <CategoryMenu/>
    <Fooditems/>
    <Cart/>
    <GoToTop/>
    <Footer/>
    </>
  )
}

export default Home
