import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <a href="/" className="logo">
        Redux
      </a>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
}

export default Header;
