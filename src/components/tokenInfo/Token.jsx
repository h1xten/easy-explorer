import React from 'react'
import InfoRow from '../transactions/transaction/InfoRow'

const Token = ({token}) => {
  return (
    <div>
        {token ?
            <div>
                <h5 className='block__title'>TOKEN INFO</h5>
                <div className="block__content">
                    <InfoRow title= 'Value:' value={(token.balance / Math.pow(10, token.contract_decimals)).toFixed(4) + '  ' + token.contract_ticker_symbol + '  (~$' + (token.quote).toFixed(2) + ')'}/>
                    {token.quote_rate ? <InfoRow title= 'Price:' value = {'$' + (token.quote_rate).toFixed(2) + '/' + token.contract_ticker_symbol } /> : ' '}
                    <InfoRow title= 'Contract Name:' value={token.contract_name} />
                    <InfoRow title= 'Ticker Symbol:' value={token.contract_ticker_symbol}/>
                    <InfoRow title='Contract Address:' value={token.contract_address}/>
                </div>
            </div>
            :
            <p></p>
        }
    </div>
  )
}

export default Token