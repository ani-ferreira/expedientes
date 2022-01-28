import { createSlice } from '@reduxjs/toolkit';
import {
  getPosts,
  createPost,
  editPostById,
  deletePost,
  getPostById,
} from './postActions';

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
      }))
      .addCase(editPostById.fulfilled, (state, action) => {
        const editPost = state.posts.map((postItem) =>
          postItem.id === action.payload.id ? action.payload : postItem
        );
        return {
          ...state,
          status: 'Success',
          posts: editPost,
          error: null,
        };
      })
      .addCase(deletePost.fulfilled, (state, action) => ({
        ...state,
        status: 'Success',
        error: null,
        post: action.payload,
      }))
      .addCase(getPostById.fulfilled, (state, action) => ({
        ...state,
        status: 'Success',
        error: null,
        post: action.payload,
      }));
  },
});

export default postsSlice.reducer;
