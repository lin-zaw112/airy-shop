import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isAuthenticated: false,
  user: null,
  //   user: {
  //     id: 15,
  //     username: "kminchelle",
  //     email: "kminchelle@qq.com",
  //     firstName: "Jeanne",
  //     lastName: "Halvorson",
  //     gender: "female",
  //     image: "https://robohash.org/autquiaut.png?size=50x50&set=set1",
  //   },
};
export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    SetUser(state, action) {
      state.user = action.payload;
    },
  },
});
