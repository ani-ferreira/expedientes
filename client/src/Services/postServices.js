import axios from 'axios';

const getHeaders = () => {
  const token = localStorage.getItem('token');
  return { Authorization: `Bearer ${token}` };
};

//get all
export const setPosts = async () => {
  try {
    const result = await axios.get('/posts', { headers: getHeaders() });
    return result.data;
  } catch (error) {
    throw new Error(error?.message);
  }
};

//create
export const newPost = async (data) => {
  try {
    const req = await axios.post('/posts/add', data, { headers: getHeaders() });
    return req.data;
  } catch (error) {
    throw new Error(error?.message);
  }
};

//edit
export const updatePostById = async (id, data) => {
  try {
    const req = await axios.put(`/posts/update/${id}`, data, {
      headers: getHeaders(),
    });
    return req.data;
  } catch (error) {
    throw new Error(error?.message);
  }
};

//delete
export const deletePostById = async (id) => {
  try {
    const req = await axios.delete(`/posts/delete/${id}`, {
      headers: getHeaders(),
    });
    return req.data;
  } catch (error) {
    throw new Error(error?.message);
  }
};

//
export const getById = async (id) => {
  try {
    const req = await axios.get(`/posts/info/${id}`, { headers: getHeaders() });
    return req.data;
  } catch (error) {
    throw new Error(error?.message);
  }
};
