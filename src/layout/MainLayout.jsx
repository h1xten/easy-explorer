import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import HyphenButton from '../components/hyphen/HyphenButton'
const MainLayout = () => {
  return (
    <>
        <header>
            <Navbar />
            <HyphenButton />
        </header>
        <main className="main">
            <Outlet />
        </main>
    </>
  )
}

export default MainLayout