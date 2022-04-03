import axios from 'axios';


const axiosApiInstance = axios.create();

// Request interceptor for API calls
axiosApiInstance.interceptors.request.use(
  async (config) => {
    config.headers = {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

//get all
export const setPosts = async () => {
  try {
    const result = await axiosApiInstance.get('/posts');
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
    const req = await axiosApiInstance.post('/posts/add', data);
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
    const req = await axiosApiInstance.put(`/posts/update/${id}`, data);
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
    const req = await axiosApiInstance.delete(`/posts/delete/${id}`);
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
    const req = await axiosApiInstance.get(`/posts/info/${id}`);
    return req.data;
  } catch (error) {
    if (error.response.status === 403) {
      localStorage.clear();
      window.location.href = '/login';
    }
  }
};
