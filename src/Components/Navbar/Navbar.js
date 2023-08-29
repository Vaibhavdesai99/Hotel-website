import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../Assets/Logo.png";
const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <ul className="nav-links">
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>

        <li>
          <Link to="/Activities">Activities</Link>
        </li>
        <li>
          <Link to="/Packages">Packages</Link>
        </li>
        <li>
          <Link to="Gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>

     
    </nav>
  );
};

export default Navbar;
