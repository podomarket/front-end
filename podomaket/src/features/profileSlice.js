import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { updateProfileAPI } from "./apis";

const initialState = {
  profile: [],
  isLoading: false,
  error: null,
};

// 프로필 가져오기
export const __getProfile = createAsyncThunk(
  "profile/getProfile",
  async (payload, thunkAPI) => {
    try {
      const profiles = await axios.get("http://localhost:3001/mypage");
      return thunkAPI.fulfillWithValue(profiles.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//프로필 수정하기
export const __updateProfile = createAsyncThunk(
  "Profile/updateProfile",
  async (params, thunkAPI) => {
    const { id, edit } = params;
    console.log(edit);
    try {
      const response = await updateProfileAPI(id, edit);
      return thunkAPI.fulfillWithValue({ id, edit }); // 인자가 하나여야 함
    } catch (err) {
      console.log("error ::::::", err.response);
      return thunkAPI.rejectWithValue("<<", err);
    }
  }
);

export const profileSlice = createSlice({
  name: "profileList",
  initialState,
  reducers: {},
  extraReducers: {
    // GET Profile List
    [__getProfile.pending]: (state) => {
      state.isLoading = true;
    },
    [__getProfile.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.profile = action.payload;
    },
    [__getProfile.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default profileSlice.reducer;
