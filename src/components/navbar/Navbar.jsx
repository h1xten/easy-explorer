import React from 'react'
import AddressForm from '../addressform/AddressForm'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='navbar__content wrapper'>
            <div className='navbar__logo'>EasyExplorer</div>
            <AddressForm />
        </div>
    </nav>
  )
}

export default Navbar