import {createSlice, PayloadAction} from "@reduxjs/toolkit";





export const initialState = {
  cart: []
}


const slice = createSlice({
    name: 'cart',
    initialState,
    reducers: {},

})


export const cartReducer = slice.reducer

export const cartActions = slice.actions