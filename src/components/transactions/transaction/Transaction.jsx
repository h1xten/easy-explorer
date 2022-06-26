import { ArrowLeftOutlined } from '@ant-design/icons/lib/icons'
import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'
import InfoRow from './InfoRow'

const Transaction = () => {
    const { hash } = useParams()
    const tx = useSelector(state => state.address.transactions).find(trans => trans.tx_hash === hash)
  return (
    <div className='transaction__datails page wrapper'>
        <h5 className='block__title'> <div className="trans_title"> <NavLink to= '/'> <ArrowLeftOutlined className='back_arrow'/> </NavLink><p className='trans_title_text'> Transaction Details </p></div></h5>
        <div className="block__content">
            <InfoRow title= 'Transaction Hash:' value={tx.tx_hash} />
            <InfoRow title= 'Block:' value={tx.block_height} />
            <InfoRow title= 'Status:' value={tx.successful === true ? 'successful' : 'Fail'} />
            {tx.block_signed_at ? <InfoRow title= 'Date:' value={(tx.block_signed_at).replace(/T|Z/g, '  ')} /> : ''}
            {tx.from_address ? <InfoRow title= 'From:' value={tx.from_address} /> : ''}
            {tx.to_address ? <InfoRow title= 'To:' value={tx.to_address} /> : ''}
            {tx.value_quote ? <InfoRow title= 'Value:' value={'$ ' + (tx.value_quote).toFixed(2)} /> : ''}
            <InfoRow title= 'Tx Fee:' value={'$ ' + (tx.gas_quote).toFixed(4)} />
        </div>
    </div>
  )
}

export default Transaction