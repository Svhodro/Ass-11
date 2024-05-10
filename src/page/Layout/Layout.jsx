import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../../Components/Nav/Nav'
import Home from '../../Home/Home'

function Layout() {
  return (
    <>
    <Nav/>
    <Outlet/>
   
    </>
    
  )
}

export default Layout