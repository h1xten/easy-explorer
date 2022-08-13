import { createSlice } from "@reduxjs/toolkit";

export const tokenSlice = createSlice({
    name: 'token',
    initialState: {
        selectedToken: null,
    },
    reducers: {
        selectToken(state, action) {
            state.selectedToken = action.payload
        }
    },
})
export const {selectToken} = tokenSlice.actions