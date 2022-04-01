import React from 'react';
import { Card } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../store/registerReducer';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { message, success, isLoading } = useSelector(
    (state) => state.registerReducer
  );

  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    role: '',
  });

  useEffect(() => {
    if (success) {
      navigate('/');
    }
  }, [message, success, navigate]);

  const inputHandler = (e) => {
    let userInput = { ...data };
    userInput[e.target.name] = e.target.value;
    setData(userInput);
  };

  async function submitHandler(e) {
    e.preventDefault();

    await dispatch(register(data));
    console.log(data);
    Swal.fire({
      title: 'Guardado!',
      text: 'Se registro el usuario correctamente.',
      icon: 'success',
      confirmButtonText: 'Salir',
      timer: 1600,
    });
  }

  return (
    <>
      <h3 className="banner">Registrar usuario</h3>
      <div className="col-xs-12 col-sm-6 col-md-4 container">
        <Card className="mt-5 mb-5  p-5 container">
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Nombre de usuario
              </label>
              <input
                type="text"
                autoComplete="off"
                className="form-control"
                name="name"
                value={data.name}
                onChange={(e) => {
                  inputHandler(e);
                }}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                autoComplete="off"
                className="form-control"
                name="email"
                value={data.email}
                onChange={(e) => {
                  inputHandler(e);
                }}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Contraseña
              </label>
              <input
                type="password"
                autoComplete="off"
                className="form-control"
                name="password"
                value={data.password}
                onChange={(e) => {
                  inputHandler(e);
                }}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="tipo">Tipo de usuario:</label>
              <select
                className="form-control"
                name="role"
                required
                onChange={(e) => inputHandler(e)}
              >
                <option value="">Seleccionar</option>
                <option value={data.role.admin}>admin</option>
                <option value={data.role.editor}>editor</option>
              </select>
            </div>

            <span className="d-block mb-3 text-danger">{message}</span>
            <button className="btn btn-secondary">
              {' '}
              {isLoading ? (
                <div
                  className="spinner-border spinner-border-sm"
                  role="status"
                />
              ) : (
                'Crear usuario'
              )}
            </button>
          </form>
        </Card>
      </div>
    </>
  );
};

export default Register;
