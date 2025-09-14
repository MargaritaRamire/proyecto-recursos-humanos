import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import "./sidebar.css"; // estilos del sidebar

const Layout = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
