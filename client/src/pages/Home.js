import Links from '../components/Links';
import HomeCards from '../components/HomeCards';
import { useSelector } from 'react-redux';

const Home = () => {
  const auth = useSelector((state) => state.authReducer.isAuth);
  console.log('auth is:' + auth);
  return (
    <>
      <HomeCards />
      <Links />
    </>
  );
};

export default Home;
