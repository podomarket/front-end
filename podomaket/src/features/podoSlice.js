import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  users: [],
  isLoading: false,
  error: null,
};
export const __getProducts = createAsyncThunk(
  "products/getProducts",
  async (payload, thunkAPI) => {
    try {
      const products = await axios.get("http://localhost:3001/products");
      console.log(products.data);
      return thunkAPI.fulfillWithValue(products.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __addProducts = createAsyncThunk(
  "post/addPost",
  async (payload, thunkAPI) => {
    try {
      await axios.post("http://localhost:3001/products", payload);
      return thunkAPI.fulfillWithValue(payload);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const __addUser = createAsyncThunk(
  "post/addUser",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      await axios.post("http://34.201.116.215:8080/user/signup", payload);
      return thunkAPI.fulfillWithValue(payload);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
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
      state.todos = action.payload;
    },
    [__addProducts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // ADD User
    [__addUser.pending]: (state) => {
      state.isLoading = true;
    },
    [__addUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.users.push(action.payload);
    },
    [__addUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
