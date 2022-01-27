import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";

export default function EditPost() {
  const { id } = useParams();
  const [data, setData] = useState({
    fecha: "",
    expediente: "",
    movimiento: "",
    tipo: "",
  });

  const [validName, setValidName] = useState(false);
  const [nameFocus, setNameFocus] = useState(false);

  const { fecha, expediente, movimiento } = data;
  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });

    if (e.target.value !== "") {
      setValidName(true);
    }
  };

  const history = useHistory();
  //edit posts
  const onSubmit = async (e) => {
    e.preventDefault();
    setNameFocus(true);
    var letters = /^[a-zA-Z\s]*$/;
    if (!data.expediente.match(letters)) {
      setValidName(false);
      return;
    }

    setValidName(true);
    await axios
      .put(`/posts/update/${id}`, data)
      .then(
        Swal.fire({
          title: "Guardado!",
          text: "Se editó el movimiento correctamente.",
          icon: "success",
          confirmButtonText: "Salir",
          timer: 1600,
        })
      )
      .then(() => {
        history.replace("/");
      });
  };

  return (
    <div className="col-md-10 mt-3 mx-auto">
      <h1 className="h3 mb-3 font-weight-normal">Ingresar datos</h1>
      <form>
        {/*  1 */}
        <br />
        <div className="form-group">
          <label>Fecha:</label>
          <input
            type="text"
            className="form-control"
            name="fecha"
            placeholder="Ingresar fecha"
            value={fecha}
            onChange={(e) => handleInputChange(e)}
            required
          />
        </div>
        {/*  2 */}
        <br />
        <div className="form-group">
          <label>Expediente:</label>
          <input
            type="text"
            className="form-control"
            name="expediente"
            placeholder='Ingresar nombre de la carátula, sin caracteres ( / - " " )'
            value={expediente}
            onChange={(e) => handleInputChange(e)}
            required
            pattern="[A-Za-z]"
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
          <label>Movimiento:</label>
          <input
            type="text"
            className="form-control"
            name="movimiento"
            placeholder="Ingresar movimiento"
            value={movimiento}
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
        {/*  <div className="form-group">
          <label>Remuneración:</label>
          <input
            type="text"
            className="form-control"
            name"
            placeholder="Ingresar remuneracion"
            value={remuneracion}
            onChange={(e) => handleInputChange(e)}
            required
          />
        </div> */}
        <br />
        <button className="btn btn-success" type="submit" onClick={onSubmit}>
          &nbsp; &nbsp;Guardar cambios
        </button>
      </form>
    </div>
  );
}
