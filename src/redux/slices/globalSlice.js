import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  bucket: [],
  products: [],
  feedbacks: [],
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.isAuth = action.payload;
    },
    setBucket: (state, action) => {
      state.bucket = action.payload;
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setFeedbacks: (state, action) => {
      state.feedbacks = action.payload;
    },
  },
});

export const { setAuth, setBucket, setProducts, setFeedbacks } =
  globalSlice.actions;

export default globalSlice.reducer;
