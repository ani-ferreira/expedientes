import { createAsyncThunk } from '@reduxjs/toolkit';
import { setPosts, newPost } from '../Services/postServices';

const getPosts = createAsyncThunk('posts/getPosts', setPosts);

const createPost = createAsyncThunk('posts/createPost', newPost);

export { getPosts, createPost };
