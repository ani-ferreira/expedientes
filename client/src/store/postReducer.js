import { createSlice } from '@reduxjs/toolkit';
import { getPosts, createPost } from './postActions';

const initialState = {
  status: null,
  posts: [],
  post: {},
  error: null,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder
      //get all
      .addCase(getPosts.fulfilled, (state, action) => ({
        ...state,
        status: 'Success',
        error: null,
        posts: action.payload,
      }))
      .addCase(createPost.fulfilled, (state, action) => ({
        ...state,
        status: 'Success',
        error: null,
        post: action.payload,
      }));
  },
});

export default postsSlice.reducer;
