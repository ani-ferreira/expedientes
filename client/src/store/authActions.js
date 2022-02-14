import { loginUser } from '../Services/authServices';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const loginAuth = createAsyncThunk('auth/loginAuth', loginUser);
