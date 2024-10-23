import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <NavLink to="/" className="nav-link link-1" end>
            Site Name
          </NavLink>
        </li>
        <li className="link-2">
          <NavLink
            to="/pricing"
            className={({ isActive }) =>
              `nav-link ${isActive ? "selected" : ""}`
            }
          >
            Pricing
          </NavLink>
        </li>
        <li className="link-3">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `nav-link ${isActive ? "selected" : ""}`
            }
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
