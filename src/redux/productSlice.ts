import {  createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { fetchProducts } from '../services/api';

export const loadProducts = createAsyncThunk('products/loadProducts', async () => {
    return await fetchProducts();
  });


  const productSlice = createSlice({
    name: 'products',
    initialState: {
      items: [],
      searchQuery: '',
      status: 'idle',
    },
    reducers: {
      setSearchQuery(state, action) {
        state.searchQuery = action.payload;
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(loadProducts.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(loadProducts.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.items = action.payload;
        });
    },
  });
  
  export const { setSearchQuery } = productSlice.actions;
  export default productSlice.reducer;