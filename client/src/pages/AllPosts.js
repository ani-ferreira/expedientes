import LoadingSpinner from '../components/Layout/LoadingSpinner';
import Swal from 'sweetalert2';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts, deletePost } from '../store/postActions';

const AllPosts = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postsReducer.posts.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  //dispatch getPosts action to render the list again after deleting
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
      <div className="margin">
        <br />
        <div className="row">
          <div className="col-lg-9 mt-2 mb-2">
            <h2>Todos los movimientos</h2>
          </div>
          <div className="col-lg-3 mt-2 mb-2">
            <input
              className="form-control"
              type="search"
              placeholder="Filtrar por nombre de expediente"
              name="searchTerm"
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            ></input>
          </div>
        </div>
      </div>
      <br />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Fecha</th>
            <th scope="col">Expediente</th>
            <th scope="col">Movimiento</th>
            <th scope="col">Tipo</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>{' '}
        {posts ? (
          <tbody>
            {posts
              .filter((val) => {
                if (searchTerm === '') {
                  return val;
                } else if (
                  val.expediente
                    .toLowerCase()
                    .includes(searchTerm.toLocaleLowerCase())
                ) {
                  return val;
                }
              })
              .map((post, index) => (
                <tr key={index}>
                  <th scope="row">{index}</th>
                  <td>{post.fecha}</td>
                  <td>{post.expediente}</td>
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
              ))
              .reverse()}
          </tbody>
        ) : (
          <LoadingSpinner />
        )}
      </table>
    </div>
  );
};
export default AllPosts;
