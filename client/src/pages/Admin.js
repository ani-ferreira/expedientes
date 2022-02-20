import React from 'react';
import { Link } from 'react-router-dom';

const Admin = () => {
  return (
    <>
      <h3 className="banner">Panel de administración</h3>

      <div>
        <ul className="text-center">
          <li>
            <Link to="/register" className="btn btn-secondary btn-lg mt-5">
              Registrar nuevo usuario
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Admin;
