import LogoutBtn from '../LogoutBtn';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const isAdmin = useSelector((state) => state.authReducer.role);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <NavLink to="/" className="navbar-brand">
        &nbsp; Home
      </NavLink>

      <div className="collapse navbar-collapse" id="navbarNav"></div>
      {isAuth && isAdmin === 'admin' ? (
        <NavLink
          to="/admin"
          style={({ isActive }) => {
            return {
              display: 'block',
              margin: '1rem ',
              color: 'white',
              textDecoration: isActive ? '' : 'none',
            };
          }}
        >
          &nbsp;Admin
        </NavLink>
      ) : null}
      {isAuth ? <LogoutBtn /> : null}
    </nav>
  );
};

export default Header;
