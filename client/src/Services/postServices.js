import axios from 'axios';

//get all
export const setPosts = async () => {
  try {
    const result = await axios.get('/posts', {
      withCredentials: true,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },});
    return result.data;
  } catch (error) {
    if (error.response.status === 403) {
      localStorage.clear();
      window.location.href = '/login';
    }
  }
};

//create
export const newPost = async (data) => {
  try {
    const req = await axios.post('/posts/add', data);
    return req.data;
  } catch (error) {
    if (error.response.status === 403) {
      localStorage.clear();
      window.location.href = '/login';
    }
  }
};

//edit
export const updatePostById = async (id, data) => {
  try {
    const req = await axios.put(`/posts/update/${id}`, data);
    return req.data;
  } catch (error) {
    if (error.response.status === 403) {
      localStorage.clear();
      window.location.href = '/login';
    }
  }
};

//delete
export const deletePostById = async (id) => {
  try {
    const req = await axios.delete(`/posts/delete/${id}`);
    return req.data;
  } catch (error) {
    if (error.response.status === 403) {
      localStorage.clear();
      window.location.href = '/login';
    }
  }
};

//
export const getById = async (id) => {
  try {
    const req = await axios.get(`/posts/info/${id}`);
    return req.data;
  } catch (error) {
    if (error.response.status === 403) {
      localStorage.clear();
      window.location.href = '/login';
    }
  }
};
