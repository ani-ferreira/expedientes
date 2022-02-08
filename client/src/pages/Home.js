import Links from '../components/Links';
import { useSelector } from 'react-redux';
import HomeCards from '../components/HomeCards';

const Home = () => {
  const isLogged = useSelector((state) => state.authReducer.isAuth);
  const token = useSelector((state) => state.authReducer.token);
  console.log(isLogged);
  console.log(token);

  return (
    <>
      <HomeCards />
      <Links />
    </>
  );
};

export default Home;
