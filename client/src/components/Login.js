import { useState } from 'react';
import { loginUser } from '../Services/authServices';
import { Card } from 'react-bootstrap';

const Login = () => {
  const [data, setdata] = useState({
    email: '',
    password: '',
  });

  const inputHandler = (e) => {
    const userInput = { ...data };
    userInput[e.target.name] = e.target.value;
    setdata(userInput);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    loginUser(data);
  };

  return (
    <Card className="w-50 p-5 container">
      <form onSubmit={(e) => submitHandler(e)}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => {
              inputHandler(e);
            }}
            value={data.email}
            name="email"
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
          />
        </div>
        <button className="btn btn-secondary">Ingresar</button>
      </form>
    </Card>
  );
};

export default Login;
