import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const covalentApi = createApi({
    reducerPath: 'covalentApi',
    baseQuery: fetchBaseQuery({baseUrl: process.env.REACT_APP_API_URL}),
    endpoints: (builder) => ({
        getAddressInfo: builder.query({
            query: ({chain_id, address}) => ({
                url: `${chain_id}/address/${address}/balances_v2/`,
                params: {
                    key: process.env.REACT_APP_CKEY
                }
            }),
            transformResponse: (response) => response.data
        }),
        getAddressTransactions: builder.query({
            query: ({chain_id, address}) => ({
                url: `${chain_id}/address/${address}/transactions_v2/?quote-currency=USD&format=JSON&no-logs=true&page-size=500&block-signed-at-asc=false&key=${process.env.REACT_APP_CKEY}`,
            }),
            transformResponse: (response) => response.data
        }),
        getTransaction: builder.query({
            query: ({chain_id, hash}) => ({
                url: `${chain_id}/transaction_v2/${hash}/`,
                params: {
                    key: process.env.REACT_APP_CKEY
                }
            }),
            transformResponse: (response) => response.data.items[0]
        })
    })
})

export const {useGetAddressInfoQuery, useGetAddressTransactionsQuery, useGetTransactionQuery} = covalentApi;