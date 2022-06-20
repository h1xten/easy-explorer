import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation, Navigate } from 'react-router-dom'
import './Address.css'

const Address = () => {
    const location = useLocation();
    const address = useSelector( state => state.address.address );
 
    if(address){
        return <Navigate to = '/' state={{from: location}}/>
    }

  return (
    <div className='address'>
        <div className="address__content wrapper">
            Please Enter Your Address And Choose Network
        </div>
    </div>
  )
}

export default Address