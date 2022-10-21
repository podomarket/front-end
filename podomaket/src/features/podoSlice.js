import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import moment from "moment";
// 안써도 자동으로 한국 시간을 불러온다. 명확하게 하기 위해 import
import "moment/locale/ko";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const nowTime = moment().format("YYYY-MM-DD HH:mm:ss");

const initialState = {
  products: [
    {
      id: "1",
      title: "운동화 중고 판매",
      price: "20,000원",
      time: nowTime,
    },
  ],
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
