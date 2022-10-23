import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: [],
  login: [],
  isLoading: false,
  error: null,
};

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

export const __getUser = createAsyncThunk(
  "post/getUser",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      await axios.post("http://34.201.116.215:8080/user/login", payload);
      return thunkAPI.fulfillWithValue(payload);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
  extraReducers: {
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

    // Get User
    [__addUser.pending]: (state) => {
      state.isLoading = true;
    },
    [__addUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.login = action.payload;
    },
    [__addUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
