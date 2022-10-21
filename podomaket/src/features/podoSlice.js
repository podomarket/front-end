import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const initialState = {
  products: [],
  isLoading: false,
  error: null,
};

export const __getProducts = createAsyncThunk(
  "products/getProducts",
  async (payload, thunkAPI) => {
    try {
      const products = await axios.get(`${BASE_URL}/product`);
      console.log(products);
      return thunkAPI.fulfillWithValue(products.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const podoSlice = createSlice({
  name: "productList",
  initialState,
  reducers: {
    extraReducers: {
      //
      [__getProducts.pending]: (state) => {
        state.isLoading = true;
      },
      [__getProducts.fulfilled]: (state, action) => {
        state.isLoading = false;
        state.todos = action.payload;
      },
      [__getProducts.rejected]: (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      },
    },
  },
});
