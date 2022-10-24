import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { addCommentsApi } from "./apis";

const initialState = {
  comments: [],
  isLoading: false,
  error: null,
};

export const __addComments = createAsyncThunk(
  "post/addComments",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      await axios.post(addCommentsApi, payload);
      return thunkAPI.fulfillWithValue(payload);
    } catch (err) {
      console.log("error");
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const commentSlice = createSlice({
  name: "commnents",
  initialState,
  reducers: {},
  extraReducers: {
    // ADD Comments
    [__addComments.pending]: (state) => {
      state.isLoading = true;
    },
    [__addComments.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments.push(action.payload);
    },
    [__addComments.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { commnents } = commentSlice.actions;
export default commentSlice.reducer;
