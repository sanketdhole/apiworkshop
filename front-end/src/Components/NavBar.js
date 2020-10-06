import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="logo">
            <i className="fab fa-typo3"></i>
            <p>Jobbbs</p>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
