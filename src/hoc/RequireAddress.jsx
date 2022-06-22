import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation, Navigate } from 'react-router-dom'
import {Watch} from 'react-loader-spinner'

const RequireAddress = ({children}) => {
    const location = useLocation();
    const address = useSelector( state => state.address.address );
    const status = useSelector(state => state.address.status)
    const transactions_status = useSelector(state => state.address.transactions_status)
 
    if(!address){
        return <Navigate to = '/address' state={{from: location}}/>
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

    return children;
}

export default RequireAddress