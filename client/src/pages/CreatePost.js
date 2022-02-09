import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { createPost } from '../store/postActions';

const CreatePost = () => {
  const dispatch = useDispatch();

  const [data, setData] = useState({
    fecha: '',
    expediente: '',
    movimiento: '',
    tipo: '',
  });

  const [validName, setValidName] = useState(false);
  const [nameFocus, setNameFocus] = useState(false);

  const navigate = useNavigate();

  function handleInputChange(e) {
    const newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
    if (e.target.value !== '') {
      setValidName(true);
    }
  }

  const newDataObj = {
    fecha: data.fecha,
    expediente: data.expediente,
    movimiento: data.movimiento,
    tipo: data.tipo,
  };

  function onSubmit(e) {
    e.preventDefault();
    setNameFocus(true);
    var letters = /^[a-zA-Z\s]*$/;
    if (!data.expediente.match(letters)) {
      setValidName(false);
      return;
    }

    setValidName(true);

    async function creatingPost() {
      return dispatch(createPost(newDataObj));
    }

    creatingPost()
      .then(() => {
        Swal.fire({
          title: 'Guardado!',
          text: 'Se agregó el movimiento correctamente.',
          icon: 'success',
          confirmButtonText: 'Salir',
          timer: 1600,
        });
      })
      .then(() => {
        navigate('/');
      });
  }

  return (
    <div className="col-md-10 mt-3 mx-auto">
      <h1 className="h3 mb-3 font-weight-normal">Ingresar datos</h1>
      <form onSubmit={onSubmit}>
        {/*  1 */}
        <br />
        <div className="form-group">
          <label htmlFor="fecha">Fecha:</label>
          <input
            type="text"
            className="form-control"
            name="fecha"
            placeholder="Ingresar fecha"
            value={data.fecha}
            onChange={(e) => handleInputChange(e)}
            required
          />
        </div>
        {/*  2 */}
        <br />
        <div className="form-group">
          <label htmlFor="expediente">Expediente:</label>
          <input
            type="text"
            className="form-control"
            name="expediente"
            placeholder='Ingresar nombre de la carátula, sin caracteres ( / - " " )'
            value={data.expediente}
            onChange={(e) => handleInputChange(e)}
            required
            title="No ingresar números ni caracteres especiales. Sólo texto."
          />
          {!validName && nameFocus && (
            <span className="error">
              No ingresar números ni caracteres especiales.
            </span>
          )}
        </div>
        {/*  3 */}
        <br />
        <div className="form-group">
          <label htmlFor="movimiento">Movimiento:</label>
          <input
            type="text"
            className="form-control"
            name="movimiento"
            placeholder="Ingresar movimiento"
            value={data.movimiento}
            onChange={(e) => handleInputChange(e)}
            required
          />
        </div>
        {/*  4 */}
        <br />
        <div className="form-group">
          <label htmlFor="tipo">Tipo:</label>
          <select
            className="form-control"
            name="tipo"
            required
            onChange={(e) => handleInputChange(e)}
          >
            <option value="">Seleccionar</option>
            <option value={data.tipo.judicial}>judicial</option>
            <option value={data.tipo.extrajudicial}>extrajudicial</option>
          </select>
        </div>
        <br />
        <button className="btn btn-success" type="submit">
          Guardar
        </button>
        &nbsp;
        <button className="btn btn-danger ">
          <Link to="/" className="text-decoration-none text-white">
            Cancelar
          </Link>
          &nbsp;
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
