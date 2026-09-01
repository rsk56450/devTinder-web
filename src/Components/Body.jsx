import React from 'react'
import NavbarComponent from './NavbarComponent.jsx';
import { Outlet } from 'react-router-dom';
import Footer from './Footer.jsx';
const Body = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <NavbarComponent />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Body