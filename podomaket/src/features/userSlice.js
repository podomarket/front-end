import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { localSet, localDel } from "../localStorage";

const initialState = {
  token: null,
  user: { username: "" },
  users: [],
  isLoading: false,
  error: null,
  isLogin: null,
};

//HG
const instance = axios.create({
  baseURL: "http://54.173.186.166:8080",
});

export const loginApi = async (userInfo) => {
  const response = await instance.post("users/login", userInfo);

  return response;
};

//유저 조회하기
export const __getUsers = createAsyncThunk(
  "post/getUser",
  async (payload, thunkAPI) => {
    try {
      const users = await axios.get(`http://54.173.186.166:8080`);
      return thunkAPI.fulfillWithValue(users.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 유저 추가하기
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
    try {
      const response = await axios.post(
        "http://54.173.186.166:8080/users/login",
        payload
      );
      const accessToken = response.headers.authorization;
      const refreshToken = response.headers["refresh-token"];
      // localSet("token", response.headers.authorization);

      // console.log(response.headers.authorization);
      // thunkAPI.dispatch(setUser());
      if (response.status === 200 || response.status === 201) {
        window.localStorage.setItem("accessToken", accessToken);
        window.localStorage.setItem("refreshToken", refreshToken);
        // window.localStorage.setItem("nickname", response.data.data.nickname);
        alert("로그인 성공");
        window.location.replace("/");
        return thunkAPI.fulfillWithValue(response.data);
      }
    } catch (error) {
      if (400 < error.response.status && error.response.status < 500) {
        window.location.reload();
        alert("로그인 실패");
      }
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __login = createAsyncThunk(
  "post/login",
  async (payload, thunkAPI) => {
    try {
      const response = await loginApi(payload);
      return thunkAPI.fulfillWithValue(response);
    } catch (error) {
      console.log(error);
    }
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

export const { setUser, setToken } = userSlice.actions;
export default userSlice.reducer;
