import React from "react";

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <Link to="/">Song Overview</Link>
        </li>
        <li className="nav__item">
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
