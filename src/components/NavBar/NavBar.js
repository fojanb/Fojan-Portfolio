import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="bg-red-500 bg-opacity-20">
      <div
        id="navbar"
        className="grid grid-rows-1 grid-cols-4 justify-center text-lg items-center  py-8 w-1/2 text-gray-100 m-auto lg:w-3/4 md:w-3/4 sm:grid-cols-1 sm:gap-4 sm:pb-10"
      >
        <Link
          to="/"
          className="flex justify-center items-center font-bold text-lg transform hover:scale-110 hover:transition duration-500 ease-in-out sm:text-l"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="flex justify-center items-center font-bold text-lg transform hover:scale-110 hover:transition duration-500 ease-in-out sm:text-l"
        >
          About
        </Link>
        <Link
          to="/gallery"
          className="flex justify-center items-center font-bold text-lg transform hover:scale-110 hover:transition duration-500 ease-in-out sm:text-l"
        >
          Gallery
        </Link>
        <Link
          to="/contact"
          className="flex justify-center items-center font-bold text-lg transform hover:scale-110 hover:transition duration-500 ease-in-out sm:text-l"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
