import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalAmount: 0,
    isShowing: false,
  },
  reducers: {
    addItem(state, action) {
      if (state.items.length > 0) {
        const existingItem = state.items.find(
          (item) => item.title === action.payload.title
        );
        if (existingItem) {
          existingItem.quantity++;
          existingItem.total = existingItem.price * existingItem.quantity;
          state.totalAmount += existingItem.price;
          return;
        }
      }
      state.items.push({
        id: Math.random().toString(),
        title: action.payload.title,
        price: action.payload.price,
        quantity: 1,
        total: action.payload.price,
      });
      state.totalAmount += action.payload.price;
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
