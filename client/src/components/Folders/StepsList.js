import { useParams } from 'react-router';
import { useEffect } from 'react';
import LoadingSpinner from '../Layout/LoadingSpinner';
import Swal from 'sweetalert2';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts, deletePost } from '../../store/postActions';
import { Link } from 'react-router-dom';

const StepsList = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const steps = useSelector((state) => state.postsReducer.posts.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  console.log(params);
  const onDelete = (id) => {
    Swal.fire({
      title: 'Estás seguro/a?',
      text: 'No vas a podes deshacer esta acción.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#008000',
      cancelButtonText: 'Cancelar',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Eliminado!', 'El movimiento ha sido eliminado', 'success');

        dispatch(deletePost(id));
        dispatch(getPosts());
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

        {/*  <div className="btn btn-secondary align-self-center ">
          <Link to="/add" className="text-decoration-none text-white">
            Cargar nuevo
          </Link>
        </div> */}
      </div>

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
        {steps ? (
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
                    <Link
                      className="btn btn-outline-warning"
                      to={`/edit/${post._id}`}
                    >
                      Editar
                    </Link>
                    &nbsp;
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => onDelete(post._id)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        ) : (
          <LoadingSpinner />
        )}
      </table>
    </div>
  );
};

export default StepsList;
