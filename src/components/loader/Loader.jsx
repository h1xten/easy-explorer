import React from 'react'
import {Watch} from 'react-loader-spinner'

const Loader = () => {
    return(
    <div className = 'loader'>
        <Watch ariaLabel='watch-loading' height= "80px" width="80px" color='var(--primary-color)'/>
    </div>
    )
}

export default Loader