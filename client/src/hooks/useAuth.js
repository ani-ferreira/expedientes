import { useSelector } from 'react-redux';

const useAuth = () => {
  const isAuth = useSelector((state) => state.authReducer.isAuth);

  const auth = isAuth;

  return auth;
};

export default useAuth;
