import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query/react"
import { covalentApi } from "./covalentApi";
import {tokenSlice} from "./tokenSlice"
import { udSlice } from "./udSlice";

const rootReducer = combineReducers({
    [covalentApi.reducerPath]: covalentApi.reducer,
    [tokenSlice.name]: tokenSlice.reducer,
    [udSlice.name]: udSlice.reducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(covalentApi.middleware)
});

setupListeners(store.dispatch)