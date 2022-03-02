import { useLocation, Navigate, Outlet } from 'react-router-dom';

import { useSelector } from 'react-redux';

const RequireAdmin = () => {
  const location = useLocation();
  const { role } = useSelector((state) => state.authReducer);

  return role === 'admin' ? (
    <Outlet />
  ) : (
    <Navigate to="/unathorized" state={{ from: location }} replace />
  );
};

export default RequireAdmin;
