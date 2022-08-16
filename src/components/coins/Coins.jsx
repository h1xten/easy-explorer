import React from 'react'
import { Badge, Select  } from 'antd'
import './Coins.css'
import { selectToken } from '../../store/tokenSlice'
import { useDispatch } from 'react-redux'

const Coins = ({coins}) => {
    const dispatch = useDispatch()
    const {Option} = Select
    const coins_list = coins
    let options = ''

    coins_list ? options = coins_list.map(coin => 
        <Option key={coin.contract_address} value = {coin.contract_name}>
            <span className='token__options'>
                <p className='token__option__content'>
                        <img src={coin.logo_url} id='coin_logo' width='20px' height='20px' alt=""  onError={(e) => {
                            e.onerror = 'error'
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
        <Badge count = {coins_list.length}>
            <Select className='tokens__select' onChange={value => dispatch(selectToken(value))} placeholder = "Tokens" allowClear>
                {options}
            </Select>
        </Badge>
    </div>
  )
}

export default Coins