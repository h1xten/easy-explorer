import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { Watch } from 'react-loader-spinner'
import './Address.css'

const Address = () => {
    
  return (
    <div className='address'>
        <div className="address__content wrapper">
            Please Enter Your Address And Choose a Network or Login with Unstoppable
        </div>
    </div>
  )
}

export default Address