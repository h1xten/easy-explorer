import React, { useState } from 'react'
import { Pagination } from 'antd'
import TransList from './TransList'
import './TransactionsPage.css'


const TransactionsPage = ({trans}) => {
    const [currentPage, setCurrentPage] = useState(1)
    const transPerPage = 10
    const length = trans.length !== 0 ? trans.length : 0
    const lastTransIndex = currentPage * transPerPage
    const firstTransIndex = lastTransIndex - transPerPage
    const currentTrans = trans? trans.slice(firstTransIndex, lastTransIndex) : null
   
    const paginate = pageNumber => setCurrentPage(pageNumber)
    
  return (
    <div className= { length > 0 ? 'transactions__content' : 'trans_not_found'}>
        <TransList trans={currentTrans} />
        <Pagination hideOnSinglePage = {true} defaultCurrent={1} showSizeChanger = {false} onChange={paginate} total={length + 1} />
    </div>
  )
}

export default TransactionsPage