import React, { useState } from 'react'
import { Pagination } from 'antd'
import TransList from './TransList'


const TransactionsPage = ({trans}) => {
    const transactions = trans.items
    const [currentPage, setCurrentPage] = useState(1)
    const transPerPage = 10

    const lastTransIndex = currentPage * transPerPage
    const firstTransIndex = lastTransIndex - transPerPage
    const currentTrans = transactions.slice(firstTransIndex, lastTransIndex)
   
    const paginate = pageNumber => setCurrentPage(pageNumber)
    
  return (
    <div>
        <TransList trans={currentTrans} />
        <Pagination defaultCurrent={1} showSizeChanger = {false} onChange={paginate} total={transactions.length + 1} />
    </div>
  )
}

export default TransactionsPage