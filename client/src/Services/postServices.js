import axios from 'axios';

//get all
export const setPosts = async () => {
  try {
    const result = await axios.get('/posts');
    return result.data;
  } catch (error) {
    throw new Error(error?.message);
  }
};

//create
export const newPost = async (data) => {
  try {
    const req = await axios.post('/posts/add', data);
    return req.data;
  } catch (error) {
    throw new Error(error?.message);
  }
};

//edit
export const updatePostById = async (id, data) => {
  try {
    const req = await axios.put(`/posts/update/${id}`, data);
    return req.data;
  } catch (error) {
    throw new Error(error?.message);
  }
};

//delete
export const deletePostById = async (id) => {
  try {
    const req = await axios.delete(`/posts/delete/${id}`);
    return req.data;
  } catch (error) {
    throw new Error(error?.message);
  }
};

//
export const getById = async (id) => {
  try {
    const req = await axios.get(`/posts/${id}`);
    return req.data;
  } catch (error) {
    throw new Error(error?.message);
  }
};
