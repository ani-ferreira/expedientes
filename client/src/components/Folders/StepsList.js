import { useParams } from "react-router";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LoadingSpinner from "../Layout/LoadingSpinner";
import Swal from "sweetalert2";

const StepsList = () => {
  const params = useParams();
  const [steps, setSteps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setPosts();
  }, []);

  const setPosts = () => {
    axios.get("/posts").then((result) => {
      setSteps(result.data.posts);
      setLoading(false);
    });
  };

  /* const onDelete = (id) => {
    axios.delete(`/posts/delete/${id}`).then(() => {
      alert("Ha sido eliminado");
      setSteps();
    });
  }; */
  const onDelete = (id) => {
    Swal.fire({
      title: "Estás seguro/a?",
      text: "No vas a podes deshacer esta acción.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#008000",
      cancelButtonText: "Cancelar",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Eliminado!", "El movimiento ha sido eliminado", "success");

        axios.delete(`/posts/delete/${id}`).then(() => {
          const newSteps = steps.filter((step) => step.id !== id);
          setSteps(newSteps);
        });
      }
    });
  };

  return (
    <div className="container">
      <div class=" d-flex justify-content-between margin">
        <div>
          <h2>Carátula:</h2>
          <h5>"{params.folderlist}"</h5>
        </div>

        <div className="btn btn-secondary align-self-center ">
          <Link to="/add" className="text-decoration-none text-white">
            Cargar nuevo
          </Link>
        </div>
      </div>
      {loading && <LoadingSpinner />}
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Fecha</th>
            <th scope="col">Movimiento</th>
            <th scope="col">Tipo</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>

        <tbody>
          {steps
            .filter((post) => post.expediente === params.folderlist)
            .map((post, index) => (
              <tr>
                <th scope="row">{index}</th>
                <td>{post.fecha}</td>
                <td>{post.movimiento}</td>
                <td>{post.tipo}</td>
                <td>
                  <a
                    className="btn btn-outline-warning"
                    href={`/edit/${post._id}`}
                  >
                    Editar
                  </a>
                  &nbsp;
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => onDelete(post._id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}{" "}
        </tbody>
      </table>
    </div>
  );
};

export default StepsList;
