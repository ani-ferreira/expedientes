import { Outlet } from 'react-router-dom';
import React from 'react';

import Header from '../components/Layout/Header';
const Layout = () => {
  return (
    <main className="App">
      <Header />
      <h1 className="home-title py-5">Gestión de expedientes</h1>
      <Outlet />
    </main>
  );
};

export default Layout;
