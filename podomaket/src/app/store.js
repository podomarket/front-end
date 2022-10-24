import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import modalSlice from "../features/modalSlice";
import { podoSlice } from "../features/podoSlice";
import { profileSlice } from "../features/profileSlice";
import userSlice from "../features/userSlice";

export const store = configureStore({
  reducer: {
    productList: podoSlice.reducer,
    userSlice,
    modalSlice,
    profileSlice: profileSlice.reducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
