import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/navbar'
import Footer from '../Footer/footer'
const Layout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout