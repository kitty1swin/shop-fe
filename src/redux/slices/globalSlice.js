import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  bucket: [],
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.isAuth = action.payload;
    },
    setBucket: (state, action) => {
      state.bucket = [...state.bucket, action.payload];
    },
  },
});

export const { setAuth, setBucket } = globalSlice.actions;

export default globalSlice.reducer;
