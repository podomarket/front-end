import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  token: null,
  login: null,
  users: [],
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

export const __setUser = createAsyncThunk(
  "post/setUser",
  async (payload, thunkAPI) => {
    const result = await axios.post("http://localhost:3001/login");
    thunkAPI.dispatch(setUser(result.data));
  }
);

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.token = action.payload.token;
      state.login = action.payload.login;
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

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
