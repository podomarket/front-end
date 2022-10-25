import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import modalSlice from "../features/modalSlice";
import { podoSlice } from "../features/podoSlice";
import { profileSlice } from "../features/profileSlice";
import userSlice from "../features/userSlice";
import comments from "../features/commentSlice";

export const store = configureStore({
  reducer: {
    productList: podoSlice.reducer,
    userSlice,

    modalSlice,
    profileSlice: profileSlice.reducer,

    comments,

  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
