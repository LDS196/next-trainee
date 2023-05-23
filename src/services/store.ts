import {AnyAction, configureStore, ThunkDispatch} from '@reduxjs/toolkit'
import {setupListeners} from "@reduxjs/toolkit/query";
import {productsApi} from "@/services/productApi/productApi";
import {cartReducer} from "@/features/products/products.slise";



export const store = configureStore({
    reducer: {
        [productsApi.reducerPath]:productsApi.reducer,
        cart:cartReducer
    },
    middleware:(getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware)
})


export type RootStateType = ReturnType<typeof store.getState>

export type AppDispatch = ThunkDispatch<RootStateType, unknown, AnyAction>

setupListeners(store.dispatch)