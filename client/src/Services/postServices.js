import axios from 'axios';

const getHeaders = () => {
  const token = localStorage.getItem('token');
  return { Authorization: `Bearer ${token}` };
};

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
    const result = await axios.get('/posts');
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
    const req = await axios.post('/posts/add', data, { headers: getHeaders() });
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
    const req = await axios.put(`/posts/update/${id}`, data, {
      headers: getHeaders(),
    });
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
    const req = await axios.delete(`/posts/delete/${id}`, {
      headers: getHeaders(),
    });
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
    const req = await axios.get(`/posts/info/${id}`, { headers: getHeaders() });
    return req.data;
  } catch (error) {
    if (error.response.status === 403) {
      localStorage.clear();
      window.location.href = '/login';
    }
  }
};
