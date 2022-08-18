import { createSlice } from "@reduxjs/toolkit";

export const udSlice = createSlice({
    name: 'UD',
    initialState: {
        viaUD: false,
        currentUD: null,
        user: null,
    },
    reducers: {
        setUserUD(state, action) {
            state.user = action.payload
            state.viaUD = true
        },
        setCurrentUD(state, action) {
            state.currentUD = action.payload
        },
        clearUD(state, action) {
            state.viaUD = false
            state.currentUD = null
            state.user = null
        }
    },
})
export const {setUserUD, setCurrentUD, clearUD} = udSlice.actions