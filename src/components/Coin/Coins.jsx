import React from 'react'
import Coin from './Coin'
import './Coins.css'
import { useSelector } from 'react-redux/es/exports'

const Coins = () => {
    const coins = useSelector(state => state.address.tokens)
    let content = ''
    coins ? content = coins.map(coin => <Coin balance={coin.balance} decimals = {coin.contract_decimals} symbol = {coin.contract_ticker_symbol} name = {coin.contract_name} logo = {coin.logo_url} /> )
            : <p>No Tokens Found</p>
  return (
    <div className='coins'>
        {content}
    </div>
  )
}

export default Coins