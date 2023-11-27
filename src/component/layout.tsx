import React from 'react';
import Navbar from './navbar';
import { Outlet } from 'react-router-dom';
import Footer from './footer';

const Layout = () => {
  return (
    <div className="flex flex-col bg-gradient-to-br from-[#001a27] via-[#000c27] to-[#001138]">
      <div className="">
        <Navbar />
      </div>

      <div className="">
        <Outlet />
      </div>

      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
