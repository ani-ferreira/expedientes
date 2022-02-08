import React from 'react';

const LogoutBtn = () => {
  return (
    <button
      className="btn btn-danger"
      onClick={() => {
        localStorage.removeItem('token');
      }}
    >
      Logout
    </button>
  );
};

export default LogoutBtn;
