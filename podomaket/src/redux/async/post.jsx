import { createAsyncThunk } from "@reduxjs/toolkit";
import { addProductApi } from "../../features/apis";

export const addProductDB = createAsyncThunk(
  "post/addPost",
  async (params, thunkAPI) => {
    // 서버랑 통신하는 코드 작성
    const response = await addProductApi(params);
    console.log(params);
    return response;
  }
);
