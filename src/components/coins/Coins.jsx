import React from 'react'
import { Badge, Select  } from 'antd'
import './Coins.css'
import { useSelector } from 'react-redux/es/exports'

const Coins = () => {
    const {Option} = Select
    const coins = useSelector(state => state.address.tokens)
    let options = ''
    coins ? options = coins.map(coin => 
        <Option key={coin.contract_address} value = {coin.contract_name}>
            <span className='token__options'>
                <p className='token__option__content'>
                    <img src={coin.logo_url} width='20px' height='20px' alt=""  onError={(e) => {
                        e.onError = null
                        e.currentTarget.src = ''}
                    } />
                    {coin.contract_name} ({coin.contract_ticker_symbol})
                </p>
                <p>{(coin.balance / Math.pow(10, coin.contract_decimals)).toFixed(4)}</p>
            </span>
        </Option>)
            : <p>No Tokens Found</p>
  return (
    <div className='coins'>
        <Badge count = {coins.length}>
            <Select mode='none' className='tokens__select' placeholder = "Tokens" allowClear>
                {options}
            </Select>
        </Badge>
    </div>
  )
}

export default Coins