import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Form = (props) => {
  const [data, setData] = useState({
    fecha: '',
    expediente: '',
    movimiento: '',
    tipo: '',
  });

  useEffect(() => {
    setData({
      fecha: props.post ? props.post.fecha : '',
      expediente: props.post ? props.post.expediente : '',
      movimiento: props.post ? props.post.movimiento : '',
      tipo: '',
    });
  }, [props.post]);

  const [validName, setValidName] = useState(false);
  const [nameFocus, setNameFocus] = useState(false);

  function handleInputChange(e) {
    const newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
    if (e.target.value !== '') {
      setValidName(true);
    }
  }

  //send input data to parent component
  const sendData = (e) => {
    e.preventDefault();
    setNameFocus(true);

    var letters = /^[a-zA-Z\s]*$/;
    if (!data.expediente.match(letters)) {
      setValidName(false);
      return;
    }

    setValidName(true);
    props.onSaveDataHandler(data);
    props.onSubmit();
  };

  return (
    <form onSubmit={sendData}>
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
  );
};

export default Form;
