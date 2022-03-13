import LoadingSpinner from './Layout/LoadingSpinner';
import { Link } from 'react-router-dom';

const PostsTable = (props) => {
  const posts = props.posts;
  let searchedWord = props.searchTerm;

  const filteredPosts = posts?.filter((val) => {
    return val.expediente
      .toLowerCase()
      .includes(searchedWord.toLocaleLowerCase());
  });

  let viewIsSmall = true;

  if (window.matchMedia('(max-width: 700px)').matches) {
    // Viewport is less or equal to 700 pixels wide
    viewIsSmall = true;
  } else {
    // Viewport is greater than 700 pixels wide
    viewIsSmall = false;
  }

  return (
    <div class="table-responsive-sm">
      <table class="table">
        <thead>
          <tr>
            {/*  <th scope="col">ID</th> */}
            <th scope="col">Fecha</th>
            <th scope="col">Expediente</th>
            <th scope="col">Movimiento</th>
            {!viewIsSmall && <th scope="col">Tipo</th>}
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        {posts ? (
          <tbody>
            {filteredPosts
              .map((post, index) => (
                <tr key={index}>
                  {/* <th scope="row">{index}</th> */}
                  <td>{post.fecha}</td>
                  <td>{post.expediente}</td>
                  <td>{post.movimiento}</td>
                  {!viewIsSmall && <td>{post.tipo}</td>}
                  <td className="td">
                    <Link
                      to={`/edit/${post._id}`}
                      className="btn btn-outline-warning m-1"
                    >
                      Editar
                    </Link>
                    &nbsp;
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => {
                        props.onDelete(post._id);
                      }}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))
              .reverse()}
          </tbody>
        ) : (
          <tbody>
            <tr>
              <td>
                <LoadingSpinner />
              </td>
            </tr>
          </tbody>
        )}
      </table>
    </div>
  );
};

export default PostsTable;
