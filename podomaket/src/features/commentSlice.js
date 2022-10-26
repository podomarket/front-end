import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { addCommentsApi, delCommentAPI, getCommentsApi } from "./apis";

const initialState = {
  content: [],
  isLoading: false,
  error: null,
};

export const __addComments = createAsyncThunk(
  "post/addComments",
  async (payload, thunkAPI) => {
    // console.log("getCommnets payload값", payload);
    try {
      await addCommentsApi(payload);
      window.location.reload();
      return thunkAPI.fulfillWithValue(payload);
    } catch (err) {
      console.log("error");
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const getComments = createAsyncThunk(
  "post/getComments",
  async (payload, thunkAPI) => {
    // console.log("get=>", payload);
    try {
      await getCommentsApi(payload);
      return thunkAPI.fulfillWithValue(payload);
    } catch (err) {
      console.log("error");
      return thunkAPI.rejectWithValue(err);
    }
  }
);

// export const __delComment = createAsyncThunk(
//   "post/delComment",
//   async (payload, thunkAPI) => {
//     try {
//       await axios.delete(
//         `http://54.173.186.166:8080/products/comments/${payload}`
//       );
//       return thunkAPI.fulfillWithValue(payload);
//     } catch (err) {
//       return thunkAPI.rejectWithValue(err);
//     }
//   }
// );

export const __delComment = createAsyncThunk(
  "post/delProducts",
  async (params, thunkAPI) => {
    try {
      const response = await delCommentAPI(params);
      return thunkAPI.fulfillWithValue(params);
    } catch (err) {
      console.log("error ::::::", err.response);
      return thunkAPI.rejectWithValue("<<", err);
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
      // console.log("post액션페이로드=>", action.payload);

      state.content.data?.push(action.payload);
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
      // console.log("get=>", action.payload);
      state.content = action.payload;
    },
    [getComments.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // DELETE Comment
    [__delComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__delComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.content = state.content.filter(
        (content) => content.id !== action.payload
      );
    },
    [__delComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
//
export const { content } = commentSlice.actions;
export default commentSlice.reducer;
