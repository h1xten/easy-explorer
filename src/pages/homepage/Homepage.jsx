import React from 'react'
import { useSelector } from 'react-redux'
import Coins from '../../components/Coin/Coins'

const Homepage = () => {

    const address1 = useSelector(state => state.address.address)
  return (
    <div className='homepage'>
        <div className='homepage__content page wrapper'>
            Your Wallet
            <div>
                Address: {address1}
                Balance: 000
            </div>
            <div>
                <Coins />
            </div>
            
        </div>
    </div>
  )
}

export default Homepage