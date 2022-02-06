import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './postReducer';
import authReducer from './authReducer';

const store = configureStore({
  reducer: {
    postsReducer: postsReducer,
    authReducer: authReducer,
  },
});
export default store;
