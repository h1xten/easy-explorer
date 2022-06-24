import React from 'react'
import './Homepage.css'
import { useSelector } from 'react-redux'
import Coins from '../../components/coins/Coins'
import { chains } from '../../config'
import TransactionsPage from '../../components/transactions/TransactionsPage'
import TokenInfo from '../../components/tokenInfo/TokenInfo'
import InfoRow from '../../components/transactions/transaction/InfoRow'

const Homepage = () => {

    const address = useSelector(state => state.address.address)
    const chain_id = useSelector(state => state.address.chain_id)
    const tokens = useSelector(state => state.address.tokens)
    const chain = chains[chain_id]
    const token_name = useSelector(state => state.address.selectedToken)

    let balance = 0
    tokens.forEach(e => {
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
                            <InfoRow title= 'Tokens:' value={<Coins />} />
                        </div>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className="page">
                        {token_name ?
                            <TokenInfo selectedToken = {token_name} />
                            : <p className='block__title'>Token Not Selected</p>
                        }
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-12'>
                    <div className="transactions page">
                        <TransactionsPage/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Homepage