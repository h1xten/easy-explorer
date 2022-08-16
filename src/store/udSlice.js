import { createSlice } from "@reduxjs/toolkit";

export const udSlice = createSlice({
    name: 'UD',
    initialState: {
        currentUD: null,
        user: null,
    },
    reducers: {
        setUserUD(state, action) {
            state.user = action.payload
        },
        setCurrentUD(state, action) {
            state.currentUD = action.payload
        },
        clearUD(state, action) {
            state.currentUD = null
            state.user = null
        }
    },
})
export const {setUserUD, setCurrentUD, clearUD} = udSlice.actions