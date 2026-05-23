import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  theme: 'lemonade',
};


export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, { payload }) => {
      state.user = payload;
    },
    logoutUser: (state) => {
      state.user = null;
    },
    toggleTheme: (state) => {
      state.theme = state.theme === 'coffee' ? 'lemonade' : 'coffee';
    }
  },
});

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;

export default userSlice.reducer;