import { configureStore } from "@reduxjs/toolkit";
import sliderReducer from "../features/Slices/sliderSlice";
import productsReducer from "../features/Slices/productSlice";
import cartReducer from "../features/Slices/cartSlice";
import authReducer from "../features/Slices/authSlice"
export const store = configureStore({
  reducer: {
    slider: sliderReducer,
    products: productsReducer,
    cart: cartReducer,
    user: authReducer
  },
});
