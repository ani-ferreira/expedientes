import { configureStore } from '@reduxjs/toolkit';
import reducer from './postReducer';

const store = configureStore({
  reducer: {
    postsReducer: reducer,
  },
});
export default store;
