import React from 'react'
import {useNavigate} from 'react-router-dom'
import { Input, Select, Button, notification } from 'antd'
import { chains } from '../../config'
import { SearchOutlined } from '@ant-design/icons/lib/icons'
import UdLogin from '../udlogin/UdLogin'
import './addressform.css'
import { useDispatch } from 'react-redux'
import { clearToken } from '../../store/tokenSlice'

const AddressForm = ({address, setAddress, chain, setChain}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {Option} = Select
    let options = []
    for(const key in chains){
        options.push(<Option key={key} value = {key} >{chains[key]}</Option>)
    }

    const handleChain = (value) => {
        setChain(value)
    }
    const searchHandle = (chain_id, address) => {
        if(chain_id === null || address === null || !chain_id || !address) {
            const args = {
                message: `Alert`,
                description: 'Please enter address and choose network',
                duration: 2,
            }
            return notification.open(args)
        }
        dispatch(clearToken())
        navigate(`explore/${address}/${chain_id}`)
    }

  return (
    <div className='address__form'>
        <Input className='address__inp' value={address} onChange={(e) => setAddress(e.target.value)} placeholder='Address' allowClear/>
        <Select className='address__select' placeholder = 'Network' value={chain} onChange={handleChain} allowClear >
            {options}
        </Select>
        <Button className='search__btn' type='primary' onClick={() => searchHandle(chain, address)} > <SearchOutlined width='10px' height='10px' className='search__icon' /> </Button>
        <UdLogin/>
    </div>
  )
}

export default AddressForm