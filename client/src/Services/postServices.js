import axios from 'axios';

const axiosInstance = axios.create({
  headers: {'authorization': `Bearer ${localStorage.getItem('token')}`}
});

//get all
export const setPosts = async () => {
  try {
    const result = await axiosInstance.get('/posts');
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
    const req = await axiosInstance.post('/posts/add', data);
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
    const req = await axiosInstance.put(`/posts/update/${id}`, data);
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
    const req = await axiosInstance.delete(`/posts/delete/${id}`);
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
    const req = await axiosInstance.get(`/posts/info/${id}`);
    return req.data;
  } catch (error) {
    if (error.response.status === 403) {
      localStorage.clear();
      window.location.href = '/login';
    }
  }
};
