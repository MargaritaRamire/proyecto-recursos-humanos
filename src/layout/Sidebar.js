import React from "react";
import { NavLink } from "react-router-dom";
import './sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2>Recursos Humanos</h2>
      <ul>
        <li>
          <NavLink to="/convocatorias" className={({ isActive }) => isActive ? 'active' : ''}>
            Convocatorias
          </NavLink>
        </li>
        <li>
          <NavLink to="/encuestas360" className={({ isActive }) => isActive ? 'active' : ''}>
            Encuestas 360
          </NavLink>
        </li>

                <li>
          <NavLink to="/prueba2" className={({ isActive }) => isActive ? 'active' : ''}>
            Modulo 3
          </NavLink>
        </li>
        {/* Agrega más módulos aquí */}
      </ul>
    </aside>
  );
};

export default Sidebar;
