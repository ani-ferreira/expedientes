import axios from 'axios';

const getHeaders = () => {
  const token = localStorage.getItem('token');
  return { Authorization: `Bearer ${token}` };
};

//Clear localStorage after 30 min from login
const logoutTimer = () => {
  setTimeout(() => {
    localStorage.clear();
  }, 60000 * 30);
};

export const registerUser = async (data) => {
  const response = await axios.post('/user/register', data, {
    headers: getHeaders(),
  });
  return response.data;
};

export const loginUser = async (data) => {
  const response = await axios.post('/user/login', data);
  if (response.data) {
    console.log(response?.data);

    localStorage.setItem('token', response.data.token);
    localStorage.setItem('role', response.data.role);
    logoutTimer();
  }
  return response.data;
};
