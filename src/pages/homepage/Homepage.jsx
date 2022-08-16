import React from 'react'
import './Homepage.css'
import { useGetAddressInfoQuery, useGetAddressTransactionsQuery } from '../../store/covalentApi'
import { useParams } from 'react-router-dom'
import Loader from '../../components/loader/Loader'
import ErrorBlock from '../../components/error/ErrorBlock'
import ExplorePage from '../explorepage/ExplorePage'

const Homepage = () => {
    const {address, chain_id} = useParams()
    const {data: address_info, isLoading: addressLoading, isError: addressError, error: addressErrorInfo} = useGetAddressInfoQuery({chain_id, address})
    const {data: address_trans, isLoading: transLoading, isError: transError, error: transErrorInfo} = useGetAddressTransactionsQuery({chain_id, address})
    
    if(addressLoading || transLoading) return <Loader />

    else if(addressError) {
        return <ErrorBlock title={addressErrorInfo.status} value={addressErrorInfo.data.error_message} />
    }
    else if(transError) {
        return <ErrorBlock title={transErrorInfo.status} value={transErrorInfo.data.error_message} />
    }
    
    return <ExplorePage address = {address} chain_id = {chain_id} address_info = {address_info} address_trans = {address_trans} />
}

export default Homepage