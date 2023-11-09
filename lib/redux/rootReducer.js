/* Instruments */
import { CartSlice, UiSlice, UserSlice } from "./slices";

export const reducer = {
  Cart: CartSlice.reducer,
  Ui: UiSlice.reducer,
  User: UserSlice.reducer,
};
