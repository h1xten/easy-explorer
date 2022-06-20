import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'

const MainLayout = () => {
  return (
    <>
        <header>
            <Navbar />
        </header>
        <main className="main">
            <Outlet />
        </main>
    </>
  )
}

export default MainLayout