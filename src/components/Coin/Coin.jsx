import React from 'react'

const Coin = ({balance, decimals, logo, symbol, name }) => {
    const amount = (balance / Math.pow(10, decimals)).toFixed(2)
  return (
    <div className='coin'>
        <img src={logo ? logo : 'qq'} alt="" width='25px' height='25px' /><p>{name} ({symbol}) : {amount} </p>
    </div>
  )
}

export default Coin