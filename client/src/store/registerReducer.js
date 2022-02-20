import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { registerUser } from '../Services/authServices';

export const register = createAsyncThunk(
  'auth/register',
  async (user, thunkAPI) => {
    try {
      return await registerUser(user);
    } catch (error) {
      let message = '';
      if (error.response.status === 401) {
        message = 'Email ya registrado';
      } else if (error.response.status === 400) {
        message = 'Completar con datos válidos';
      } else {
        message = 'Algo falló, intentar otra vez';
      }
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const initialState = {
  success: false,
  isLoading: false,
  isError: false,
  message: '',
};

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state) => {
        state.isLoading = false;
        state.success = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export default registerSlice.reducer;
