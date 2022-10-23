import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { podoSlice } from "../features/podoSlice";
import userSlice from "../features/userSlice";

export const store = configureStore({
  reducer: {
    productList: podoSlice.reducer,
    userSlice,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
