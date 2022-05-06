import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice( {
  name: 'products',
  initialState: {
    "products": [],
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    removeProduct: (state, action) => {
      state = state.filter((state) => {
        return state.id !== action.payload;
      })
    }
  }
})

// Action creators are generated for each case reducer function
export const { addProduct, removeProduct } = productsSlice.actions

export default productsSlice.reducer