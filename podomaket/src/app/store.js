import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { podoSlice } from "../features/podoSlice";

export const store = configureStore({
  reducer: {
    productList: podoSlice.reducer,
  },
});
