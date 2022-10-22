import { configureStore } from "@reduxjs/toolkit";
import { podoSlice } from "../features/podoSlice";

export const store = configureStore({
  reducer: {
    products: podoSlice.reducer,
  },
});
