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
      state.subtotal += (action.payload.retailPrice);
    },
    removeProduct: (state, action) => {
      state = state.products.filter((product) => {
        return product.id !== action.payload.id;
      })
      state.subtotal -= action.payload.retailPrice;
    }
  }
})

export const { addProduct, removeProduct } = cartSlice.actions

export default cartSlice.reducer