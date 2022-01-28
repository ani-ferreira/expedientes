import { configureStore } from '@reduxjs/toolkit';
import reducer from './postReducer';

const store = configureStore({
  reducer: {
    posts: reducer,
  },
});
export default store;
