import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { delPostAPI, getProductOneAPI, updateProductAPI } from "./apis";

const initialState = {
  products: [],
  users: [],
  isLoading: false,
  error: null,
};

// 상품 가져오기
export const __getProducts = createAsyncThunk(
  "products/getProducts",
  async (payload, thunkAPI) => {
    try {
      const products = await axios.get("http://localhost:3001/products");
      // console.log(products.data);
      return thunkAPI.fulfillWithValue(products.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 상품 추가하기
export const __addProducts = createAsyncThunk(
  "post/addProducts",
  async (payload, thunkAPI) => {
    try {
      await axios.post("http://localhost:3001/products", payload);
      return thunkAPI.fulfillWithValue(payload);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

// 상품 삭제하기
export const __delPrudcts = createAsyncThunk(
  "post/delProducts",
  async (params, thunkAPI) => {
    // 👉🏻 params에 담긴, id와 뒤로가기 함수 : callBackFunc를 구조분해 할당함.
    const { id, callBackFunc } = params;
    try {
      const response = await delPostAPI(id);
      // 👉🏻 삭제 하고난 후 뒤로가기 함수 실행
      callBackFunc();
      return thunkAPI.fulfillWithValue(id);
    } catch (err) {
      console.log("error ::::::", err.response);
      return thunkAPI.rejectWithValue("<<", err);
    }
  }
);

//상품 수정하기
export const __updateProduct = createAsyncThunk(
  "post/updateProducts",
  async (params, thunkAPI) => {
    const { id, edit, callBackFunc } = params;
    // console.log(edit);
    try {
      const response = await updateProductAPI(id, edit);
      // 👉🏻 수정 하고난 후 뒤로가기 함수 실행
      callBackFunc();
      return thunkAPI.fulfillWithValue({ id, edit }); // 인자가 하나여야 함
    } catch (err) {
      console.log("error ::::::", err.response);
      return thunkAPI.rejectWithValue("<<", err);
    }
  }
);

export const podoSlice = createSlice({
  name: "productList",
  initialState,
  reducers: {},
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
    [__addProducts.pending]: (state) => {
      state.isLoading = true;
    },
    [__addProducts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    },
    [__addProducts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
