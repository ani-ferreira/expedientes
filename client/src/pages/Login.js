import { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/authReducer';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuth, message, isLoading } = useSelector(
    (state) => state.authReducer
  );

  const [data, setdata] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    if (isAuth) {
      navigate('/');
    }
  }, [isAuth, message, navigate]);

  const inputHandler = (e) => {
    const userInput = { ...data };
    userInput[e.target.name] = e.target.value;
    setdata(userInput);
  };

  async function submitHandler(e) {
    e.preventDefault();
    await dispatch(login(data));
  }

  return (
    <>
      <h3 className="banner text-center">Bienvenido/a, ingrese sus datos:</h3>

      <div className="col-xs-12 col-sm-6 col-md-4 container">
        <Card className="mt-5 mb-5  p-5 container">
          <form onSubmit={(e) => submitHandler(e)}>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Email
              </label>
              <input
                type="email"
                autoComplete="off"
                className="form-control"
                onChange={(e) => {
                  inputHandler(e);
                }}
                value={data.email}
                name="email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Password" className="form-label">
                Contraseña
              </label>
              <input
                type="password"
                className="form-control"
                onChange={(e) => {
                  inputHandler(e);
                }}
                name="password"
                value={data.password}
                required
              />
            </div>
            <span className="d-block mb-3 text-danger">{message}</span>
            <button className="btn btn-secondary">
              {isLoading ? (
                <div
                  className="spinner-border spinner-border-sm"
                  role="status"
                />
              ) : (
                'Ingresar'
              )}
            </button>
          </form>
        </Card>
      </div>
    </>
  );
};

export default Login;
