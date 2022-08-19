import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import SwapModal from '../components/swap/SwapModal'

const MainLayout = () => {
  return (
    <>
        <header>
            <Navbar />
            <SwapModal />
        </header>
        <main className="main">
            <Outlet />
        </main>
    </>
  )
}

export default MainLayout