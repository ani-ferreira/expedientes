import axios from 'axios';

const getHeaders = () => {
  const token = localStorage.getItem('token');
  return { Authorization: `Bearer ${token}` };
};

/* const customAxios = axios.create({
  baseUrl: '/posts',
  headers: getHeaders(),
});

//axios interceptors to handle logout if JWT expired(error 403)
customAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 403) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
  }
);
 */
//get all
export const setPosts = async () => {
  try {
    const result = await axios.get('/posts', { headers: getHeaders() });
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
