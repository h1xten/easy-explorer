import React, { useState } from 'react'
import { Pagination } from 'antd'
import TransList from './TransList'
import './TransactionsPage.css'
import { useSelector } from 'react-redux'


const TransactionsPage = () => {
    const transactions = useSelector(state => state.address.transactions)
    const length = transactions.length !== 0 ? transactions.length : 0
    const [currentPage, setCurrentPage] = useState(1)
    const transPerPage = 10
    const lastTransIndex = currentPage * transPerPage
    const firstTransIndex = lastTransIndex - transPerPage
    const currentTrans = transactions? transactions.slice(firstTransIndex, lastTransIndex) : 0
    const paginate = pageNumber => setCurrentPage(pageNumber)
    
  return (
    <div className= { length > 0 ? 'transactions__content' : 'trans_not_found'}>
        <TransList trans={currentTrans} />
        <Pagination hideOnSinglePage = {true} defaultCurrent={1} showSizeChanger = {false} onChange={paginate} total={length} />
    </div>
  )
}

export default TransactionsPage