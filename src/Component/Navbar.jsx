import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ cartCount }) => {
  return (
    <nav className="flex justify-between items-center px-10 py-4 bg-white shadow-md">

      <h1 className="text-3xl font-bold text-red-500">
        Foodie
      </h1>

      <ul className="flex items-center gap-8 text-gray-700 font-medium">

        <li className="hover:text-red-500">
          <Link to="/">Home</Link>
        </li>

        <li className="hover:text-red-500">
          <Link to="/menu">Menu</Link>
        </li>

        <li className="hover:text-red-500">
          <Link to="/about">About</Link>
        </li>

        <li className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
          <Link to="/cart">
            Cart 🛒 {cartCount}
          </Link>
        </li>

      </ul>

    </nav>
  );
};

export default Navbar;