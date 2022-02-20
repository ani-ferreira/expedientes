import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginUser } from '../Services/authServices';

const token = localStorage.getItem('token');

const initialState = {
  token: token ? token : null,
  isAuth: token ? true : false,
  isLoading: false,
  isError: false,
  message: '',
};

export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  try {
    return await loginUser(user);
  } catch (error) {
    let message = '';
    if (error.response.status === 400) {
      message = 'Email no registrado/contraseña inválida';
    } else if (error.response.status === 401) {
      message =
        'Introducir email válido / La contraseña debe tener al menos 6 carácteres';
    } else {
      message = 'Ingreso inválido';
    }

    return thunkAPI.rejectWithValue(message);
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      window.localStorage.removeItem('token');
      return {
        ...state,
        isAuth: false,
        token: null,
        isLoading: false,
        isError: false,
        message: '',
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuth = true;
        state.token = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.token = null;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
