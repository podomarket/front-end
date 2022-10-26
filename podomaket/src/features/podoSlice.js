import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { delPostAPI, getProductOneAPI, updateProductAPI } from "./apis";

const token = localStorage.getItem("accessToken");

const DATA_URL = "http://54.173.186.166:8080";

const addProduct = (payload) => {
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");

  const frm = new FormData();
  frm.append("title", payload.title);
  frm.append("content", payload.content);
  frm.append("file", payload.file);
  axios
    .post("http://54.173.186.166:8080/products", frm, {
      headers: {
        Authorization: accessToken,
        "Refresh-Token": refreshToken,
        "Content-Type": "multipart/form-data",
        // "Content-Type": "application/json",
      },
    })
    .then(function a(response) {
      alert("게시되었습니다.");
      window.location.replace("/");
    })
    .catch(function (error) {
      console.log(error);
    });
};

const updateProduct = (payload) => {
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");

  const frm = new FormData();
  frm.append("title", payload.title);
  frm.append("content", payload.content);
  frm.append("file", payload.file);
  axios
    .patch("http://54.173.186.166:8080/products", frm, {
      headers: {
        Authorization: accessToken,
        "Refresh-Token": refreshToken,
        "Content-Type": "multipart/form-data",
        // "Content-Type": "application/json",
      },
    })
    .then(function a(response) {
      alert("수정되었습니다.");
      window.location.replace("/");
    })
    .catch(function (error) {
      console.log(error);
    });
};

const initialState = {
  products: [],
  isLoading: false,
  error: "",
};

// 상품 전체 조회
export const __getProducts = createAsyncThunk(
  "products/getProducts",
  async (payload, thunkAPI) => {
    try {
      const products = await axios.get("http://54.173.186.166:8080/products");

      // console.log(products.data);

      return thunkAPI.fulfillWithValue(products.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 상품 단일 조회
// export const __getDetailProduct = createAsyncThunk(
//   "products/getDetailProduct",
//   async (payload, thunkAPI) => {
//     console.log("슬라이스 payload =>", payload);
//     try {
//       await getDetailProductAPI(payload);
//       console.log("무엇을 받고 있나요?", payload);
//       return thunkAPI.fulfillWithValue(payload);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

// 상품 추가하기
// export const __addProducts = createAsyncThunk(
//   "post/addProducts",
//   async (payload, thunkAPI) => {
//     try {
//       const result = await axios.post(`${DATA_URL}/products`, payload);
//       console.log(result);
//       return thunkAPI.fulfillWithValue(payload);
//     } catch (err) {
//       return thunkAPI.rejectWithValue(err);
//     }
//   }
// );

// 상품 삭제하기
export const __delPrudcts = createAsyncThunk(
  "post/delProducts",
  async (params, thunkAPI) => {
    // 👉🏻 params에 담긴, id와 뒤로가기 함수 : callBackFunc를 구조분해 할당함.
    const { id, callBackFunc } = params;
    try {
      const response = await delPostAPI(id);
      // 👉🏻 삭제 하고난 후 뒤로가기 함수 실행
      callBackFunc();
      return thunkAPI.fulfillWithValue(id);
    } catch (err) {
      console.log("error ::::::", err.response);
      return thunkAPI.rejectWithValue("<<", err);
    }
  }
);

//상품 수정하기
export const __updateProduct = createAsyncThunk(
  "post/updateProducts",
  async (params, thunkAPI) => {
    const { id, edit, callBackFunc } = params;
    // console.log(edit);
    try {
      const response = await updateProductAPI(id, edit);
      // 👉🏻 수정 하고난 후 뒤로가기 함수 실행
      callBackFunc();
      return thunkAPI.fulfillWithValue({ id, edit }); // 인자가 하나여야 함
    } catch (err) {
      console.log("error ::::::", err.response);
      return thunkAPI.rejectWithValue("<<", err);
    }
  }
);

export const podoSlice = createSlice({
  name: "productList",
  initialState,
  reducers: {
    // action => dispatch로 보낸 데이터를 받아오는 곳
    addPost: (state, action) => {
      state.products = action.payload;
      addProduct(action.payload);
    },
    updatePost: (state, action) => {
      state.products = action.payload;
      updateProduct(action.payload);
    },
  },
  extraReducers: {
    // 상품 전체 조회
    [__getProducts.pending]: (state) => {
      state.isLoading = true;
    },
    [__getProducts.fulfilled]: (state, action) => {
      state.isLoading = false;

      state.products = action.payload;
    },
    [__getProducts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // 상품 삭제
    [__delPrudcts.pending]: (state) => {
      state.isLoading = true;
    },
    [__delPrudcts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },
    [__delPrudcts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // 상품 단일 조회
    // [__getDetailProduct.fulfilled]: (state, action) => {
    //   console.log("액션 페이로드 =>", action.payload);
    //   state.products = action.payload;
    // },

    // ADD Product
    // [__addProducts.pending]: (state) => {
    //   state.isLoading = true;
    // },
    // [__addProducts.fulfilled]: (state, action) => {
    //   state.isLoading = false;
    //   state.products = action.payload;
    // },
    // [__addProducts.rejected]: (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
  },
});

export const { addPost, updatePost } = podoSlice.actions;
export default podoSlice.reducer;
