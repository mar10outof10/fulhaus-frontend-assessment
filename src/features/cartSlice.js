import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice( {
  name: 'cart',
  initialState: {
    "products": [],
    "subtotal": 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
      console.log(action.payload);
      state.subtotal += (action.payload.price);
    },
    removeProduct: (state, action) => {
      state = state.filter((state) => {
        return state.id !== action.payload;
      })
      state.subtotal -= action.payload.price;
    }
  }
})

export const { addProduct, removeProduct } = cartSlice.actions

export default cartSlice.reducer