import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {
  addCommentsApi,
  delCommentAPI,
  getCommentsApi,
  updateCommentAPI,
} from "./apis";

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

export const updateComments = createAsyncThunk(
  "put/updateComments",

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

export const __delComment = createAsyncThunk(
  "post/delComment",
  async (payload, thunkAPI) => {
    try {
      const response = await delCommentAPI(payload);
      window.location.reload();
      return thunkAPI.fulfillWithValue(payload);
    } catch (err) {
      console.log("error ::::::", err.response);
      return thunkAPI.rejectWithValue("<<", err);
    }
  }
);

export const __editComment = createAsyncThunk(
  "post/editComment",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.put(
        `http://43.201.102.30:8080/products/comments/${payload.id}`,
        {
          comment: payload.text,
        }
      );
      return thunkAPI.fulfillWithValue(data.data);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

// export const __editComment = createAsyncThunk(
//   "post/editComment",
//   async (payload, thunkAPI) => {
//     console.log(payload.id);
//     try {
//       const response = await updateCommentAPI(payload.id, payload.text);
//       return thunkAPI.fulfillWithValue({ id: payload.id, text: payload.text }); // 인자가 하나여야 함
//     } catch (err) {
//       console.log("error ::::::", err.response);
//       return thunkAPI.rejectWithValue("<<", err);
//     }
//   }
// );

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

    //GET Comments
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
      console.log(action);
      state.content = state.content.filter(
        (item) => item.id !== action.payload
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
