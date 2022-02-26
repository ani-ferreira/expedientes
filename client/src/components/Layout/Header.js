import LogoutBtn from '../LogoutBtn';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const isAdmin = useSelector((state) => state.authReducer.role);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to="/" className="navbar-brand active">
        &nbsp; Home
      </Link>

      <div className="collapse navbar-collapse" id="navbarNav"></div>
      {isAuth && isAdmin === 'admin' ? (
        <Link to="/admin" className="navbar-brand active">
          &nbsp; Admin
        </Link>
      ) : null}
      {isAuth ? <LogoutBtn /> : null}
    </nav>
  );
};

export default Header;
