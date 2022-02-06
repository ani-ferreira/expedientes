import axios from 'axios';

export const loginUser = async (data) => {
  try {
    await axios.post('/user/login', data).then((res) => {
      localStorage.setItem('token', res.data);
    });
  } catch (error) {
    console.log(error?.message);
  }
};
