import React from 'react';
import { useHistory } from 'react-router-dom';

const LogoutBtn = () => {
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem('token');
    history.replace('/login');
  };

  return (
    <button
      className="btn btn-danger"
      onClick={() => {
        logout();
      }}
    >
      Logout
    </button>
  );
};

export default LogoutBtn;
