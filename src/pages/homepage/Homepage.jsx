import React from 'react'
import './Homepage.css'
import { useSelector } from 'react-redux'
import { useGetAddressInfoQuery, useGetAddressTransactionsQuery } from '../../store/covalentApi'
import { useParams } from 'react-router-dom'
import Coins from '../../components/coins/Coins'
import { chains } from '../../config'
import TransactionsPage from '../../components/transactions/TransactionsPage'
import InfoRow from '../../components/transactions/transaction/InfoRow'
import Loader from '../../components/loader/Loader'
import Token from '../../components/tokenInfo/Token'
import ErrorBlock from '../../components/error/ErrorBlock'

const Homepage = () => {
    const {address, chain_id} = useParams()
    const {data: address_info, isLoading: addressLoading, isError: addressError, error: addressErrorInfo} = useGetAddressInfoQuery({chain_id, address})
    const {data: address_trans, isLoading: transLoading, isError: transError, error: transErrorInfo} = useGetAddressTransactionsQuery({chain_id, address})
    const token_name = useSelector(state => state.token.selectedToken)
    if(addressLoading || transLoading) return <Loader />
    else if(addressError) {
        return <ErrorBlock title={addressErrorInfo.status} value={addressErrorInfo.data.error_message} />
    }
    else if(transError) {
        return <ErrorBlock title={transErrorInfo.status} value={transErrorInfo.data.error_message} />
    }
    
    const chain = chains[chain_id]
    const coins = address_info.items
    const selected_token = token_name ? coins.find(token => token.contract_name === token_name) : null

    let balance = 0
    coins.forEach(e => {
        balance += e.quote
    });

  return (
    <div className='homepage'>
        <div className='wrapper'>
            <div className='row'>
                <div className='col-md-6' >
                    <div className="page">
                        <h5 className='block__title'>ADDRESS</h5>
                        <div className="block__content">
                            <InfoRow title= 'Address:' value={address} />
                            <InfoRow title= 'Network:' value={chain} />
                            <InfoRow title= 'Tokens Value:' value={ '$ ' + balance.toFixed(2)} />
                            <InfoRow title= 'Tokens:' value={<Coins coins = {coins} />} /> 
                        </div>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className="page">
                        {selected_token !== null ?
                            <Token token = {selected_token} />
                            : <p className='block__title'>Token Not Selected</p>
                        }
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-12'>
                    <div className="transactions page">
                        <TransactionsPage transactions={address_trans.items} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Homepage