import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="text-white h-16 bg-gray-900 flex justify-center items-center gap-12">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
};

export default Nav;
