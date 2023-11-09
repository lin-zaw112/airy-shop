/* Core */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
  itemsQuantity: 0,
  total: 0,
  hasItem: false,
};

export const CartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const id = action.payload.id;
      const item = state.carts.find((item) => item.id === id);
      state.hasItem = true;
      if (item) {
        item.quantity += 1;
        item.total = item.quantity * item.price;
      } else {
        state.carts = [
          ...state.carts,
          {
            ...action.payload,
            quantity: 1,
            total: action.payload.price,
          },
        ];
      }
      state.itemsQuantity++;
      state.total += action.payload.price;
    },
    removeFromCart(state, action) {
      const id = action.payload.id;
      const data = state.carts;
      const item = data.find((item) => item.id === id);

      if (item.quantity === 1) {
        const index = state.carts.findIndex((item) => item.id === id);
        state.carts.splice(index, 1);
      } else {
        item.quantity -= 1;
        item.total = item.quantity * item.price;
      }
      state.itemsQuantity--;
      state.total -= action.payload.price;
      if (state.itemsQuantity > 0 && !state.hasItem) state.hasItem = true;
      if (state.itemsQuantity <= 0) state.hasItem = false;
    },
  },
});
