import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import moment from "moment";
// 안써도 자동으로 한국 시간을 불러온다. 명확하게 하기 위해 import
import "moment/locale/ko";
import { addProductApi } from "./apis";

// const nowTime = moment().format("YYYY-MM-DD HH:mm:ss");

const initialState = {
  products: [],
  isLoading: false,
  error: null,
};
export const __getProducts = createAsyncThunk(
  "products/getProducts",
  async (payload, thunkAPI) => {
    try {
      const products = await axios.get("http://localhost:3001/products");
      return thunkAPI.fulfillWithValue(products.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __addProduct = createAsyncThunk(
  "post/addPost",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      await axios.post("http://localhost:3001/products", payload);
      return thunkAPI.fulfillWithValue(payload);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const podoSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    extraReducers: {
      // GET Product List
      [__getProducts.pending]: (state) => {
        state.isLoading = true;
      },
      [__getProducts.fulfilled]: (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      },
      [__getProducts.rejected]: (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      },

      // ADD Product
      [__addProduct.pending]: (state) => {
        state.isLoading = true;
      },
      [__addProduct.fulfilled]: (state, action) => {
        state.isLoading = false;
        state.products.push(action.payload);
      },
      [__addProduct.rejected]: (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      },
    },
  },
});
