import React from 'react'
import { Badge, Select  } from 'antd'
import './Coins.css'
import { useSelector } from 'react-redux/es/exports'
import { selectToken } from '../../store/addressSlice'
import { useDispatch } from 'react-redux'
import { QuestionCircleOutlined } from '@ant-design/icons/lib/icons'

const Coins = () => {
    const dispatch = useDispatch()
    const {Option} = Select
    const coins = useSelector(state => state.address.tokens)
    let options = ''

    coins ? options = coins.map(coin => 
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
        <Badge count = {coins.length}>
            <Select className='tokens__select' onChange={value => dispatch(selectToken(value))} placeholder = "Tokens" allowClear>
                {options}
            </Select>
        </Badge>
    </div>
  )
}

export default Coins