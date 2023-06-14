import { createSlice } from "@reduxjs/toolkit";

const initialValue = { cartActive: false };

const cartSlice = createSlice({
  name: "cart",
  initialState: initialValue,
  reducers: {
    setCartActive(state) {
      state.cartActive = !state.cartActive;
    },
  },
});

export const cartAction = cartSlice.actions;
export default cartSlice.reducer;
