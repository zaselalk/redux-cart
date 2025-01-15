import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    isShowing: false,
  },
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload);
    },
    removeItem(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    setCartShowing(state) {
      state.isShowing = !state.isShowing;
    },
  },
});

export const { addItem, removeItem, setCartShowing } = cartSlice.actions;
export default cartSlice.reducer;
