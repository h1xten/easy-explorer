import React, {useState} from 'react'
import { Input, Select, Button } from 'antd'
import { useDispatch } from 'react-redux'
import { getAddressInfo } from '../../store/addressSlice'
import { getAddressTransactions } from '../../store/addressSlice'
import { chains } from '../../config'
import { SearchOutlined } from '@ant-design/icons/lib/icons'
import './addressform.css'

const AddressForm = () => {
    const dispatch = useDispatch()
    const [address, setAddress] = useState(null)
    const [chain, setChain] = useState(null)
    const {Option} = Select
    let options = []
    for(const key in chains){
        options.push(<Option key={key} value = {key} >{chains[key]}</Option>)
    }

    const handleClick = (e, chain_id, address) => {
        e.preventDefault()
        dispatch(getAddressInfo({chain_id, address}))
        dispatch(getAddressTransactions({chain_id, address}))
    }
    const handleChain = (value) => {
        setChain(value)
    }

  return (
    <div className='address__form'>
        <Input className='address__inp' value={address} onChange={(e) => setAddress(e.target.value)} placeholder='Address'/>
        <Select className='address__select' placeholder = 'Choose network' value={chain} onChange={handleChain} allowClear >
            {options}
        </Select>
        <Button className='search__btn' type='primary' onClick={(e) => handleClick(e, chain, address)} > <SearchOutlined width='10px' height='10px' className='search__icon' /> </Button>
    </div>
  )
}

export default AddressForm