import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {} from "./apis";

const initialState = {
  comments: [],
  isLoading: false,
  error: null,
};

export const __addComments = createAsyncThunk(
  "post/addProducts",
  async (payload, thunkAPI) => {
    try {
      await axios.post("http://54.173.186.166:8080/products/comments", payload);
      return thunkAPI.fulfillWithValue(payload);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const commentSlice = createSlice({
  name: "productCommnent",
  initialState,
  reducers: {},
  extraReducers: {
    // ADD Comments
    [__addComments.pending]: (state) => {
      state.isLoading = true;
    },
    [__addComments.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = action.payload;
    },
    [__addComments.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
