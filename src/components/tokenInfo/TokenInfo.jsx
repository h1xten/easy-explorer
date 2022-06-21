import React from 'react'
import { useSelector } from 'react-redux'
import Token from './Token'

const TokenInfo = ({selectedToken}) => {
    const token = useSelector(state => state.address.tokens).find(token => token.contract_name === selectedToken)

  return (
    <Token token = {token} />
  )
}

export default TokenInfo