import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query/react"
import { covalentApi } from "./covalentApi";
import {tokenSlice} from "./tokenSlice"

const rootReducer = combineReducers({
    [covalentApi.reducerPath]: covalentApi.reducer,
    [tokenSlice.name]: tokenSlice.reducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(covalentApi.middleware)
});

setupListeners(store.dispatch)