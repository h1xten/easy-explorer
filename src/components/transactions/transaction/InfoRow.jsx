import React from 'react'
import './InfoRow.css'

const InfoRow = ({title, value}) => {
  return (
    <div className=" info__row row align-items-center">
        <hr className='info_space' />
        <div className='col-md-3'>{title}</div>
        <div className='col-md-9'>{value}</div>
    </div>
  )
}

export default InfoRow