import { createSlice } from '@reduxjs/toolkit';
import { loginAuth } from './authActions';

const initialState = {
  token: window.localStorage.getItem('token'),
  isAuth: !!localStorage.getItem('token'),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      window.localStorage.removeItem('token');
      return {
        ...state,
        isAuth: false,
        token: '',
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginAuth.fulfilled, (state) => {
      return {
        ...state,
        isAuth: true,
        token: localStorage.getItem('token'),
      };
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
