import React from 'react'
import './Homepage.css'
import { useSelector } from 'react-redux'
import Coins from '../../components/coins/Coins'
import { chains } from '../../config'
import TransactionsPage from '../../components/transactions/TransactionsPage'
import { Watch } from 'react-loader-spinner'
import TokenInfo from '../../components/tokenInfo/TokenInfo'

const Homepage = () => {

    const address = useSelector(state => state.address.address)
    const chain_id = useSelector(state => state.address.chain_id)
    const chain = chains[chain_id]
    const status = useSelector(state => state.address.status)
    const token_name = useSelector(state => state.address.selectedToken)

  return (
    <div className='homepage'>
        {status !== 'loading' 
            ?
            <div className='wrapper'>
                <div className='row'>
                    <div className='col-md-6' >
                        <div className="page">
                            <h5 className='block__title'>ADDRESS</h5>
                            <div className="block__content">
                                <div className='block__line'><p className='block__text'>Address:</p> {address} </div>
                                <div className='block__line'><p className='block__text'>Network:</p> {chain}</div>
                                <div className='block__line'><p className='block__text'>Tokens:</p> <Coins/></div>
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
            :
            <div className = 'loader'> <Watch ariaLabel='watch-loading' height= "80px" width="80px" color='var(--primary-color)'/></div>
        }
    </div>
  )
}

export default Homepage