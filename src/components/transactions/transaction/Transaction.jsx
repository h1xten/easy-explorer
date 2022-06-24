import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import InfoRow from './InfoRow'

const Transaction = () => {
    const { hash } = useParams()
    const tx = useSelector(state => state.address.transactions).find(trans => trans.tx_hash === hash)
  return (
    <div className='transaction__datails page wrapper'>
        <h5 className='block__title'>Transaction Details</h5>
        <div className="block__content">
            <InfoRow title= 'Transaction Hash:' value={tx.tx_hash} />
            <InfoRow title= 'Block:' value={tx.block_height} />
            <InfoRow title= 'Status:' value={tx.successful === true ? 'successful' : 'Fail'} />
            <InfoRow title= 'Date:' value={(tx.block_signed_at).replace(/T|Z/g, '  ')} />
            <InfoRow title= 'From:' value={tx.from_address} />
            <InfoRow title= 'To:' value={tx.to_address} />
            <InfoRow title= 'Value:' value={tx.value} />
            <InfoRow title= 'Tx Fee:' value={tx.fees_paid} />
        </div>
    </div>
  )
}

export default Transaction