import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "../features/todoList/todoSlice";
import { commentSlice } from "../features/todoList/commentSlice";

export const store = configureStore({
  reducer: {
    podoMarket: podoSlice.reducer,
  },
});
