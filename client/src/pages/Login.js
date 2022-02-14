import { useState } from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { loginAuth } from '../store/authActions';
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.authReducer.isAuth);

  const [data, setdata] = useState({
    email: '',
    password: '',
  });

  const inputHandler = (e) => {
    const userInput = { ...data };
    userInput[e.target.name] = e.target.value;
    setdata(userInput);
  };

  async function submitHandler(e) {
    e.preventDefault();
    await dispatch(loginAuth(data));
    console.log('auth is:' + auth);
    navigate('/');
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
              We'll never share your email with anyone else.
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
