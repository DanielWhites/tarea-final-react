import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  function handleLinkClick() {
    setShowMenu(false);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Daniel Blanco
        </Link>
        <button className="navbar-toggler" type="button" onClick={toggleMenu}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse${showMenu ? " show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={handleLinkClick}>
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/pokemon"
                onClick={handleLinkClick}
              >
                Pokemones
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
