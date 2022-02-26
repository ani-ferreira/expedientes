import Links from '../components/Links';
import HomeCards from '../components/HomeCards';
import { useSelector } from 'react-redux';

const Home = () => {
  const auth = useSelector((state) => state.authReducer.isAuth);
  const role = useSelector((state) => state.authReducer.role);
  const token = useSelector((state) => state.authReducer.token);
  console.log(role);
  console.log(token);
  console.log('auth is:' + auth);
  return (
    <>
      <HomeCards />
      <Links />
    </>
  );
};

export default Home;
