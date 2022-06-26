import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { Watch } from 'react-loader-spinner'
import './Address.css'

const Address = () => {
    const address = useSelector( state => state.address.address );
    const error = useSelector(state => state.address.error)
    const status = useSelector(state => state.address.status)
    const transactions_status = useSelector(state => state.address.transactions_status)
 
    if(address){
        return <Navigate to = '/' />
    }
    else if(status === 'loading' || transactions_status === 'loading') {
        return(
            <div className='homepage'>
                <div className = 'loader'>
                    <Watch ariaLabel='watch-loading' height= "80px" width="80px" color='var(--primary-color)'/>
                </div>
            </div>
        )
    }

  return (
    <div className='address'>
        <div className="address__content wrapper">
            {!error ? 'Please Enter Your Address And Choose a Network'
                : 'An error has occurred! Please check that the entered address is correct.'
            }
        </div>
    </div>
  )
}

export default Address