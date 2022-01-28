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
