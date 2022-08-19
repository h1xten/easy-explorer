import { ArrowLeftOutlined } from '@ant-design/icons/lib/icons'
import React from 'react'
import { Button } from 'antd'
import { useParams, useNavigate } from 'react-router-dom'
import {} from 'react-router-dom'
import { useGetTransactionQuery } from '../../../store/covalentApi'
import Loader from '../../loader/Loader'
import InfoRow from './InfoRow'

const Transaction = () => {
    const { hash, chain_id } = useParams()
    const navigate = useNavigate()
    
    const {data: tx, isLoading} = useGetTransactionQuery({chain_id, hash})
    if(isLoading) return <Loader />
    
    const backHandle = () => {
       navigate(-1)
    }

  return (
    <div className='transaction__datails page wrapper'>
        <h5 className='block__title'> 
            <div className="trans_title">
                <Button className='btn_back' onClick={backHandle}>
                    <ArrowLeftOutlined className='back_arrow'/>
                </Button>
                <p className='trans_title_text'> Transaction Details </p>
            </div>
        </h5>
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