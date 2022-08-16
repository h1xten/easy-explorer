import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const TransList = ({trans, chain}) => {
    const length = trans.length
  return (
    <>
        {length > 0 ?
            <table className="table table-borderless table-sm" id='table_of_transactions'>
            <thead className='table_bg '>
                <tr>
                    <th scope='col'>Txs Hash</th>
                    <th scope="col">Block</th>
                    <th scope="col">Date</th>
                    <th scope='col'>From</th>
                    <th scope="col">To</th>
                </tr>
            </thead>
            <tbody>
                {trans.map((trx, i) => 
                    (<tr key={i}>
                        <td><NavLink to={`/transaction/${trx.tx_hash}/${chain}`}>{(trx.tx_hash).substring(0, 15) + "..."}</NavLink></td>
                        <td> {trx.block_height}</td>
                        <td> {(trx.block_signed_at).replace(/T|Z/g, '  ')} </td>
                        <td>{(trx.from_address).substring(0, 15) + "..."}</td>
                        <td>{(trx.to_address).substring(0, 15) + "..."}</td>
                    </tr>)
                 )}
            </tbody>
        </table>
        :
        <div><p className='not_found_text'>Transactions Not Found</p></div>
        }
    </>
  )
}

export default TransList
