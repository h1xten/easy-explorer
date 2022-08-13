import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { API_URL, ckey } from "../config"

export const covalentApi = createApi({
    reducerPath: 'covalentApi',
    baseQuery: fetchBaseQuery({baseUrl: `${API_URL}`}),
    endpoints: (builder) => ({
        getAddressInfo: builder.query({
            query: ({chain_id, address}) => ({
                url: `${chain_id}/address/${address}/balances_v2/`,
                params: {
                    key: `${ckey}`
                }
            }),
            transformResponse: (response) => response.data
        }),
        getAddressTransactions: builder.query({
            query: ({chain_id, address}) => ({
                url: `${chain_id}/address/${address}/transactions_v2/?quote-currency=USD&format=JSON&no-logs=true&page-size=500&block-signed-at-asc=false&key=${ckey}`,
            }),
            transformResponse: (response) => response.data
        }),
    })
})

export const {useGetAddressInfoQuery, useGetAddressTransactionsQuery} = covalentApi;