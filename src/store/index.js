import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cart.state";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
