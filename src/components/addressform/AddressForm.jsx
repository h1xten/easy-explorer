import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { Input, Select, Button, notification } from 'antd'
import { chains } from '../../config'
import { SearchOutlined } from '@ant-design/icons/lib/icons'
import './addressform.css'

const AddressForm = () => {
    const navigate = useNavigate()
    const [address, setAddress] = useState(null)
    const [chain, setChain] = useState(null)
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
        navigate(`address/${address}/${chain_id}`)
    }

  return (
    <div className='address__form'>
        <Input className='address__inp' value={address} onChange={(e) => setAddress(e.target.value)} placeholder='Address'/>
        <Select className='address__select' placeholder = 'Network' value={chain} onChange={handleChain} allowClear >
            {options}
        </Select>
        <Button className='search__btn' type='primary' onClick={() => searchHandle(chain, address)} > <SearchOutlined width='10px' height='10px' className='search__icon' /> </Button>
    </div>
  )
}

export default AddressForm