import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { podoSlice } from "../features/podoSlice";
import userSlice from "../features/userSlice";
import comments from "../features/commentSlice";

export const store = configureStore({
  reducer: {
    productList: podoSlice.reducer,
    userSlice,
    comments,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
