import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "not logged in",
  age: "not logged in",
  email: "not logged in",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state = action.payload;
      return state;
    },

    logout: (state) => {
      state = initialState;
      return state;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
