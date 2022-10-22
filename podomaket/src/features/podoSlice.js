import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import moment from "moment";
// 안써도 자동으로 한국 시간을 불러온다. 명확하게 하기 위해 import
import "moment/locale/ko";

const nowTime = moment().format("YYYY-MM-DD HH:mm:ss");

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

export const __addProducts = createAsyncThunk(
  "products/addProducts",
  async (payload, thunkAPI) => {
    try {
      const products = await axios.post("http://localhost:3001/products");
      return thunkAPI.fulfillWithValue(products.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const podoSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    extraReducers: {
      [__getProducts.pending]: (state) => {
        state.isLoading = true;
      },
      [__getProducts.fulfilled]: (state, action) => {
        state.isLoading = false;
        state.content = action.payload;
      },
      [__getProducts.rejected]: (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      },

      [__addProducts.pending]: (state) => {
        state.isLoading = true;
      },
      [__addProducts.fulfilled]: (state, action) => {
        state.isLoading = false;
        state.products.push(action.payload);
      },
      [__addProducts.rejected]: (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      },
    },
  },
});
