import Swal from 'sweetalert2';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts, deletePost } from '../store/postActions';
import PostsTable from '../components/PostsTable';

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
      <h3 className="banner">Todos los movimientos</h3>

      <div className="col-lg-3 mt-5 mb-2">
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
      <br />
      <PostsTable posts={posts} searchTerm={searchTerm} onDelete={onDelete} />
    </div>
  );
};
export default AllPosts;
