import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../store/authReducer';

const LogoutBtn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutBtn = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <button
      className="btn btn-danger"
      onClick={() => {
        logoutBtn();
      }}
    >
      Logout
    </button>
  );
};

export default LogoutBtn;
