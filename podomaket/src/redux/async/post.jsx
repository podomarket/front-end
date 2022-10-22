import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addProductDB = createAsyncThunk(
  "post/addPost",
  async (payload, thunkAPI) => {
    // 서버랑 통신하는 코드 작성
    console.log(payload);
    try {
      await axios.post("http://localhost:3001/products", payload);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getProductDB = createAsyncThunk(
  "post/getPost",
  async (payload, thunkAPI) => {
    console.log(payload);
    // 서버랑 통신하는 코드 작성
    try {
      await axios.get("http://localhost:3001/products", payload);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
