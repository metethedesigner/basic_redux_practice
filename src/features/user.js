import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "not logged in",
  age: "not logged in",
  email: "not logged in",
};

export const userSlice = createSlice({
  name: "user",
  initialState: { value: initialState },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },

    logout: (state) => {
      state.value = initialState;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
