import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="container title margin">
      <h1>Esta página no existe</h1>
      <h1>Visitá la página principal:</h1>
      <button className="btn btn-secondary btn-lg margin" type="button">
        <Link to="/" className="text-decoration-none text-white">
          INICIO
        </Link>
      </button>
    </div>
  );
};

export default NotFound;
