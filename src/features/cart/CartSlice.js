import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";


//買い物かごの初期化
const initialState = {
  cartItems: cartItems,
  amount: 5,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart:(state) => {
      // state.cartItems = [];
      return { cartItems: [], amount: 0, total: 0 };
    }
  },
});

console.log(cartSlice);
export const { clearCart } = cartSlice.actions;
export default cartSlice.reducer;