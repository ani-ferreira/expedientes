import Links from '../components/Links';
import Login from '../components/Login';
import { useSelector } from 'react-redux';
import HomeCards from '../components/HomeCards';

const Home = () => {
  const isLogged = useSelector((state) => state.authReducer.isAuth);
  return (
    <>
      <h3 className=" banner">Control de expedientes</h3>
      {isLogged ? <HomeCards /> : <Login />}

      <Links />
    </>
  );
};

export default Home;
