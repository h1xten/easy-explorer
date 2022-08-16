import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation, Navigate } from 'react-router-dom'

const RequireAddress = ({children}) => {
    const location = useLocation();
    const addressUD = useSelector( state => state.UD.currentUD);
    const address = useSelector

    if(!address){
        return <Navigate to = '/address' state={{from: location}}/>
    }
    
    return children;
}

export default RequireAddress