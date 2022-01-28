import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  setPosts,
  newPost,
  updatePostById,
  deletePostById,
  getById,
} from '../Services/postServices';

const getPosts = createAsyncThunk('posts/getPosts', setPosts);

const createPost = createAsyncThunk('posts/createPost', newPost);

const editPostById = createAsyncThunk(
  'posts/editPostById',
  async ({ id, data }) => {
    const req = await updatePostById(id, data);
    return req;
  }
);

const deletePost = createAsyncThunk('posts/deletePost', deletePostById);

const getPostById = createAsyncThunk('posts/getPostById', getById);

export { getPosts, createPost, editPostById, deletePost, getPostById };
