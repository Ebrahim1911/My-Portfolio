import { configureStore } from "@reduxjs/toolkit";
import NavSlice from "./slices/NavSlice";
export const store = configureStore({
  reducer: {
    nav: NavSlice,
  },
});
