import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { localSet } from "../localStorage";

const initialState = {
  token: null,
  user: { username: "" },
  users: [],
  isLoading: false,
  error: null,
  isLogin: null,
};

export const __addUser = createAsyncThunk(
  "post/addUser",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      await axios.post("http://54.173.186.166:8080/users/signup", payload);
      return thunkAPI.fulfillWithValue(payload);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const __setUser = createAsyncThunk(
  "post/setUser",
  async (payload, thunkAPI) => {
    const result = await axios.post(
      "http://54.173.186.166:8080/users/login",
      payload
    );
    // console.log(result);
    localSet("token", result.headers.authorization);

    // console.log(result.headers.authorization);
    thunkAPI.dispatch(setUser());
  }
);

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.token = action.payload.token;
      state.isLogin = true;
    },
  },
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
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
