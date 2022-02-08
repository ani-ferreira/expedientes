import LogoutBtn from '../LogoutBtn';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand active" href="/">
        &nbsp; Home
      </a>

      <div className="collapse navbar-collapse" id="navbarNav"></div>
      <LogoutBtn />
    </nav>
  );
};

export default Header;
