import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { addCommentsApi, getCommentsApi } from "./apis";

const initialState = {
  content: [],
  isLoading: false,
  error: null,
};

export const __addComments = createAsyncThunk(
  "post/addComments",
  async (payload, thunkAPI) => {
    console.log("getCommnets payload값", payload);
    try {
      await addCommentsApi(payload);

      return thunkAPI.fulfillWithValue(payload);
    } catch (err) {
      console.log("error");
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const getComments = createAsyncThunk(
  "get/getComments",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      await getCommentsApi(payload);
      return thunkAPI.fulfillWithValue(payload);
    } catch (err) {
      console.log("error");
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const commentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {},
  extraReducers: {
    // ADD Comments
    [__addComments.pending]: (state) => {
      state.isLoading = true;
    },
    [__addComments.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log("액션페이로드=>", action.payload);
      state.content.push(action.payload);
    },
    [__addComments.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [getComments.pending]: (state) => {
      state.isLoading = true;
    },
    [getComments.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.content = action.payload;
    },
    [getComments.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
//
export const { content } = commentSlice.actions;
export default commentSlice.reducer;
