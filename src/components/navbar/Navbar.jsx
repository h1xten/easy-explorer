import React from 'react'
import { Switch } from 'antd'
import AddressForm from '../addressform/AddressForm'
import {useTheme} from "../../hooks/use-theme"
import './Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const {theme, setTheme} = useTheme()
    const changeTheme = () => {
        setTheme(theme === 'light'? 'dark' : 'light')
    }
  return (
    <nav className='navbar'>
        <div className='navbar__content wrapper'>
            <div className='navbar__logo'> <NavLink to= '/'>EasyExplorer</NavLink></div>
            <AddressForm />
        </div>
        <Switch id='switcher' className='navbar__switch' onChange={changeTheme}/>
    </nav>
  )
}

export default Navbar