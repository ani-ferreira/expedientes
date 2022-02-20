import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './postReducer';
import authReducer from './authReducer';
import registerReducer from './registerReducer';

const store = configureStore({
  reducer: {
    postsReducer: postsReducer,
    authReducer: authReducer,
    registerReducer: registerReducer,
  },
});
export default store;
