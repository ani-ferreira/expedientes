import { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/authReducer';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuth, isError, message } = useSelector(
    (state) => state.authReducer
  );

  const [data, setdata] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (isAuth) {
      navigate('/');
    }
    console.log(isAuth, isError, message);
  }, [isAuth, isError, message, navigate, dispatch]);

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
      <Card className="w-50 mt-5 mb-5  p-5 container">
        <form onSubmit={(e) => submitHandler(e)}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email
            </label>
            <input
              type="email"
              autoComplete="off"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => {
                inputHandler(e);
              }}
              value={data.email}
              name="email"
              required
            />
            <div id="emailHelp" className="form-text">
              {message}
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={(e) => {
                inputHandler(e);
              }}
              name="password"
              value={data.password}
              required
            />
          </div>
          <button className="btn btn-secondary">Ingresar</button>
        </form>
      </Card>
    </>
  );
};

export default Login;
