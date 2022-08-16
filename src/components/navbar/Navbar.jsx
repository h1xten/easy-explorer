import React, {useState} from 'react'
import { Switch } from 'antd'
import AddressForm from '../addressform/AddressForm'
import {useTheme} from "../../hooks/use-theme"
import './Navbar.css'
import { Navigate, NavLink } from 'react-router-dom'

const Navbar = () => {
    const {theme, setTheme} = useTheme()

    const [address, setAddress] = useState(null)
    const [chain, setChain] = useState(null)

    const changeTheme = () => {
        setTheme(theme === 'light'? 'dark' : 'light')
    }

  return (
    <nav className='navbar'>
        <div className='navbar__content wrapper'>
            <div className='navbar__logo'> <NavLink to= '/'>EasyExplorer</NavLink></div>
            <AddressForm address={address} setAddress={setAddress} chain={chain} setChain={setChain} />
            <Switch id='switcher' className='navbar__switch' onChange={changeTheme}/>
        </div>
    </nav>
  )
}

export default Navbar