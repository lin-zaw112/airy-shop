import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartIsOpen: false,
  notification: null,
};
export const UiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleCart(state) {
      state.cartIsOpen = !state.cartIsOpen;
    },
    showNotification(state, action) {
      if (action.payload === null) state.notification = null;
      else
        state.notification = {
          status: action.payload.status,
          title: action.payload.title,
          message: action.payload.message,
        };
    },
  },
});
