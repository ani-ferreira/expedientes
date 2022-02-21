import LogoutBtn from '../LogoutBtn';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
  const isAuth = useSelector((state) => state.authReducer.isAuth);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to="/" className="navbar-brand active">
        &nbsp; Home
      </Link>

      <div className="collapse navbar-collapse" id="navbarNav"></div>
      {isAuth ? <LogoutBtn /> : null}
    </nav>
  );
};

export default Header;
