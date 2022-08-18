import { createSlice } from "@reduxjs/toolkit";

export const tokenSlice = createSlice({
    name: 'token',
    initialState: {
        selectedToken: null,
    },
    reducers: {
        selectToken(state, action) {
            state.selectedToken = action.payload
        },
        clearToken(state, action){
            state.selectedToken = null
        }
    },
})
export const {selectToken, clearToken} = tokenSlice.actions