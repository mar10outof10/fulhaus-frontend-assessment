import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

export const cartSlice = createSlice( {
  name: 'cart',
  initialState: {
    "products": [],
    "subtotal": 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const cartItem = {
        id: uuid(),
        ...action.payload,
      }
      state.products.push(cartItem);
      state.subtotal += (action.payload.retailPrice);
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter((product) => {
        return product.id !== action.payload.id;
      })
      state.subtotal -= action.payload.retailPrice;
    }
  }
})

export const { addProduct, removeProduct } = cartSlice.actions

export default cartSlice.reducer