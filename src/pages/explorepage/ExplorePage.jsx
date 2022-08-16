import React from 'react'
import { useSelector } from 'react-redux'
import { chains } from '../../config'

import Token from '../../components/tokenInfo/Token'
import TransactionsPage from '../../components/transactions/TransactionsPage'
import InfoRow from '../../components/transactions/transaction/InfoRow'
import Coins from '../../components/coins/Coins'


const ExplorePage = (props) => {
    const token_name = useSelector(state => state.token.selectedToken)

    const viaUD = useSelector(state => state.UD?.viaUD)
    const subUD = useSelector(state => state.UD?.user?.idToken?.sub)
    const addressUD = useSelector(state => state.UD?.currentUD)

    const chain = chains[props.chain_id]
    const coins = props.address_info.items
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
                            {viaUD && (addressUD.toLowerCase() === props.address.toLowerCase()) ? <InfoRow title= 'Profile:' value={subUD} /> : ''}
                            <InfoRow title= 'Address:' value={props.address} />
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
                        <TransactionsPage transactions={props.address_trans.items} chain = {props.chain_id} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ExplorePage