import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL, ckey } from "../config";
import axios from "axios";

export const getAddressInfo = createAsyncThunk(
    'address/getAddressInfo',
    async function( {chain_id, address}, {rejectWithValue}) {
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

const addressSlice = createSlice({
    name: 'address',
    initialState: {
        address: null,
        tokens: null,
        transactions: null,
        status: null,
        error: null,
    },
    reducers: {
    },
    extraReducers: {
        [getAddressInfo.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [getAddressInfo.fulfilled]: (state, action) => {
            state.address = action.payload.data.address
            state.status = 'resolved';
            state.tokens = action.payload.data.items;
        },
        [getAddressInfo.rejected]: (state, action) => {
            state.status = 'rejected';
            state.address = null
            state.tokens = null
            state.error = action.payload;
        },
    }
})

export default addressSlice.reducer