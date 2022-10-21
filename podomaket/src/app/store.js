import { configureStore } from "@reduxjs/toolkit";
import { podoSlice } from "../features/podoSlice";

export const store = configureStore({
  reducer: {
    podoMarket: podoSlice.reducer,
  },
});
