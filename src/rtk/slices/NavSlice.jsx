import { createSlice } from "@reduxjs/toolkit";
const navSlice = createSlice({
  initialState: "#",
  name: "navSlice",
  reducers: {
    setActiveNav: (state, action) => {
      return (state = action.payload);
    },
  },
});
export const { setActiveNav } = navSlice.actions;
export default navSlice.reducer;
