import axios from 'axios';

export const registerUser = async (data) => {
  const response = await axios.post('/user/register', data);
  return response.data;
};

export const loginUser = async (data) => {
  const response = await axios.post('/user/login', data);
  if (response.data) {
    localStorage.setItem('token', response.data);
  }
  return response.data;
};
