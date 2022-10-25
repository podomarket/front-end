import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useParams } from "react-router-dom";
import { updateProfileAPI } from "./apis";

const register = (payload) => {
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");
  console.log("accessToken", accessToken);
  console.log("refreshToken", refreshToken);
  const frm = new FormData();
  frm.append("title", payload.title);
  frm.append("content", payload.content);
  // frm.append("file", payload.file);
  axios
    .post("http://localhost:3000/mypage/1", frm, {
      headers: {
        Authorization: accessToken,
        "Refresh-Token": refreshToken,
        "Content-Type": "application/json",
        // "Content-Type": "multipart/form-data",
      },
      redirect: "follow",
      referrer: "no-referrer",
      body: JSON.stringify({
        refresh: localStorage.getItem(refreshToken),
      }),
    })
    .then(function a(response) {
      alert("게시되었습니다.");
      window.location.replace("/");
    })
    .catch(function (error) {
      console.log(error);
    });
};

const initialState = {
  products: [
    {
      title: "",
      content: "",
    },
  ],
};

// const initialState = {
//   profile: [],
//   isLoading: false,
//   error: null,
// };

// 프로필 가져오기
export const __getProfile = createAsyncThunk(
  "profile/getProfile",
  async (payload, thunkAPI) => {
    try {
      const profiles = await axios.get("http://localhost:3000/mypage/1");
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
    console.log(id);
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
  reducers: {
    updateProfile: (state, action) => {
      state.products = action.payload;
      register(action.payload);
    },
  },
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

export const { updateProfile } = profileSlice.actions;
export default profileSlice.reducer;
