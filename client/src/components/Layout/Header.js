import LogoutBtn from '../LogoutBtn';
import { useSelector } from 'react-redux';

const Header = () => {
  const isAuth = useSelector((state) => state.authReducer.isAuth);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand active" href="/">
        &nbsp; Home
      </a>

      <div className="collapse navbar-collapse" id="navbarNav"></div>
      {isAuth ? <LogoutBtn /> : null}
    </nav>
  );
};

export default Header;
