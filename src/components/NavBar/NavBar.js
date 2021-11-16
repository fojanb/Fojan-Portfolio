import React from "react";
import { Link } from "react-router-dom";
import SvgImg from "../SvgImg/SvgImg";

const NavBar = () => {
  return (
    <div>
      <div className="absolute top-0 left-4 -z-1">
        <SvgImg />
      </div>
      <div
        id="navbar"
        className="grid grid-rows-1 grid-cols-4 justify-center text-lg z-40 items-center top-0 left-0 z-20 py-8 w-1/2 text-gray-100 m-auto lg:w-3/4 md:w-3/4 sm:grid-cols-1 sm:gap-2 sm:pb-8"
      >
        <Link
          to="/"
          className="flex justify-center items-center font-normal text-lg transform hover:scale-110 hover:transition duration-500 ease-in-out sm:text-l"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="flex justify-center items-center font-normal text-lg transform hover:scale-110 hover:transition border-l border-opacity-30 border-r duration-500 ease-in-out sm:text-l sm:border-none"
        >
          About
        </Link>
        <Link
          to="/gallery"
          className="flex justify-center items-center font-normal text-lg transform hover:scale-110 border-r border-opacity-30 hover:transition duration-500 ease-in-out sm:text-l sm:border-none"
        >
          Works
        </Link>
        <Link
          to="/contact"
          className="flex justify-center items-center font-normal text-lg transform hover:scale-110 hover:transition duration-500 ease-in-out sm:text-l"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
