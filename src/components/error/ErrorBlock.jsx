import React from 'react'

const ErrorBlock = ({title, value}) => {
  return (
    <div className='loader error'>
        Error {title}: {value}
    </div>
  )
}

export default ErrorBlock