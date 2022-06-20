import React from 'react'
import './Homepage.css'
import { useSelector } from 'react-redux'
import Coins from '../../components/coins/Coins'
import { chains } from '../../config'
import TransactionsPage from '../../components/transactions/TransactionsPage'

const Homepage = () => {

    const address = useSelector(state => state.address.address)
    const chain_id = useSelector(state => state.address.chain_id)
    const tokens = useSelector(state => state.address.tokens)
    const transactions = useSelector(state => state.address.transactions)
    const chain = chains[chain_id]

  return (
    <div className='homepage'>
        <div className='wrapper'>
            <div className='row'>
                <div className='col-md-6' >
                    <div className="page">
                        <div>Address: {address}</div>
                        <div>Network: {chain}</div>
                        <div>Tokens: <Coins/></div>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className="page">

                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-12'>
                    <div className="transactions page">
                        <TransactionsPage trans = {transactions}/>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default Homepage