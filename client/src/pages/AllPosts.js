import axios from 'axios';
import React, { useState, useEffect } from 'react';
import LoadingSpinner from '../components/Layout/LoadingSpinner';
import Swal from 'sweetalert2';

const AllPosts = () => {
  const [posts, getPosts] = useState(null);

  useEffect(() => {
    setPosts();
  }, []);

  const setPosts = () => {
    axios.get('/posts').then((result) => {
      getPosts(result.data.posts);
      console.log(result.data.posts);
    });
    console.log('all posts' + posts);
  };

  //call the setpost function to render the list again after deleting
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

        axios.delete(`/posts/delete/${id}`).then(() => {
          setPosts();
        });
      }
    });
  };

  return (
    <div className="margin">
      <br />
      <div className="col-lg-9 mt-2 mb-2">
        <h2>Todos los movimientos</h2>
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
