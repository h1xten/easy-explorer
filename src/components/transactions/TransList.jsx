import React from 'react'

const TransList = ({trans}) => {

  return (
    <div>
        <table className="table table-hover table-borderless table-sm" id='table_of_transactions'>
            <thead className='table_bg'>
                <tr>
                    <th scope='col'>Txs Hash</th>
                    <th scope="col">Block</th>
                    <th scope="col">Date</th>
                    <th scope='col'>From</th>
                    <th scope="col">To</th>
                    <th scope='col'>Successful</th>
                </tr>
            </thead>
            <tbody>
                {trans.map((trx, i) => 
                    (<tr key={i}>
                        <td>{(trx.tx_hash).substring(0, 15) + "..."}</td>
                        <td> {trx.block_height}</td>
                        <td> {(trx.block_signed_at).replace(/T|Z/g, '  ')} </td>
                        <td>{(trx.from_address).substring(0, 15) + "..."}</td>
                        <td>{(trx.to_address).substring(0, 15) + "..."}</td>
                        <td> {trx.successful.toString()} </td>
                    </tr>)
                 )}
            </tbody>
        </table>
    </div>
  )
}

export default TransList