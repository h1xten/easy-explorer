import React from 'react'

const Token = ({token}) => {
  return (
    <div>
        {token ?
            <div>
                <h5 className='block__title'>TOKEN INFO</h5>
                <div className="block__content">
                    <div className="block__line">
                        <p className='block__text'>Balance:</p> 
                        <p className='block__text'> {(token.balance / Math.pow(10, token.contract_decimals)).toFixed(4)} {token.contract_ticker_symbol} </p>
                        <p className='block__text'> ( ~{(token.quote).toFixed(2)} USD ) </p>
                    </div>
                    <div className="block__line"><p className='block__text'>Contract Name:</p> {token.contract_name}</div>
                    <div className="block__line"><p className='block__text'>Ticker Symbol:</p> {token.contract_ticker_symbol}</div>
                    <div className="block__line"><p className='block__text'>Contract Address:</p> {token.contract_address}</div>
                </div>
            </div>
            :
            <p></p>
        }
    </div>
  )
}

export default Token