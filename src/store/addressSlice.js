import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL, ckey } from "../config";
import axios from "axios";

export const getAddressInfo = createAsyncThunk(
    'address/getAddressInfo',
    async function({chain_id, address}, {rejectWithValue}) {
        try {
            const response = await axios.get(`${API_URL}${chain_id}/address/${address}/balances_v2/?&key=${ckey}`)
            if(response.status !== 200){
                throw new Error('Server Error')
            }
            return response.data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const getAddressTransactions = createAsyncThunk(
    'address/getAddressTransactions',
    async function ({chain_id, address}, {rejectWithValue}) {
        try {
            const response = await axios.get(`${API_URL}${chain_id}/address/${address}/transactions_v2/?quote-currency=USD&format=JSON&no-logs=true&block-signed-at-asc=false&key=${ckey}`)
            if(response.status !== 200) {
                throw new Error('Server Error')
            }
            return response.data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

const addressSlice = createSlice({
    name: 'address',
    initialState: {
        address: null,
        chain_id: null,
        tokens: null,
        selectedToken: null,
        transactions: null,
        status: null,
        error: null,
    },
    reducers: {
        selectToken(state, action) {
            state.selectedToken = action.payload
        }
    },
    extraReducers: {
        [getAddressInfo.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
            state.selectedToken = null;
        },
        [getAddressInfo.fulfilled]: (state, action) => {
            state.address = action.payload.data.address
            state.status = 'resolved';
            state.tokens = action.payload.data.items;
            state.chain_id = action.payload.data.chain_id
        },
        [getAddressInfo.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
        //Transactions
        [getAddressTransactions.pending]: (state) => {
            state.selectedToken = null;
            state.status = 'loading';
            state.error = null;
        },
        [getAddressTransactions.fulfilled]: (state, action) => {
            state.transactions = action.payload.data.items
            state.status = 'resolved';
        },
        [getAddressTransactions.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
    }
})
export const {selectToken} = addressSlice.actions
export default addressSlice.reducer