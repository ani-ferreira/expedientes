import LoadingSpinner from './Layout/LoadingSpinner';

const PostsTable = (props) => {
  const posts = props.posts;
  let searchedWord = props.searchTerm;

  return (
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
              if (searchedWord === '') {
                return val;
              } else if (
                val.expediente
                  .toLowerCase()
                  .includes(searchedWord.toLocaleLowerCase())
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
        <LoadingSpinner />
      )}
    </table>
  );
};

export default PostsTable;
