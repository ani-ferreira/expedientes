import { createSlice } from '@reduxjs/toolkit';

const tokenKey = window.localStorage.getItem('token');

const initialState = {
  token: tokenKey,
  isAuth: !!localStorage.getItem('token'),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducer: {},
});

export default authSlice.reducer;
