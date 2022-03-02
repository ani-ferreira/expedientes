import { Link } from 'react-router-dom';
const Unathorized = () => {
  return (
    <div className="container title margin">
      <h1>Ud no tiene acceso a esta página</h1>

      <button className="btn btn-secondary btn-lg margin" type="button">
        <Link to="/" className="text-decoration-none text-white">
          Volver al inicio
        </Link>
      </button>
    </div>
  );
};

export default Unathorized;
