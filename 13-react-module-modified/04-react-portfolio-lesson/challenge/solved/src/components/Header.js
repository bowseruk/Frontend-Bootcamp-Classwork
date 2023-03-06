import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div>
          <ul className="navbar-nav nav-fill">
            <li className="nav-item">
              <NavLink end className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              } to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              } to="/contact">
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              } to="/project-gallery">
                Project Gallery
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
  );
};

export default Header;
