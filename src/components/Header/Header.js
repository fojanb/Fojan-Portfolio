import React from "react";
import {Link} from "react-router-dom"
const Header = () => {
  return (
    <div className="grid grid-rows-1 grid-cols-4 justify-center text-lg items-center bg-red-500 bg-opacity-20 rounded-b-2xl py-10 w-1/2 text-gray-100 m-auto lg:w-3/4 md:w-3/4 sm:grid-cols-1 sm:gap-4 sm:bg-red-500 sm:bg-opacity-20 sm:pb-10 sm:rounded-b-2xl">
      <Link to="/" className="flex justify-center items-center font-bold text-lg transform hover:scale-110 hover:transition duration-500 ease-in-out sm:text-l">
        Home
      </Link>
      <Link to="/about" className="flex justify-center items-center font-bold text-lg transform hover:scale-110 hover:transition duration-500 ease-in-out sm:text-l">
        About
      </Link>
      <Link to="/gallery" className="flex justify-center items-center font-bold text-lg transform hover:scale-110 hover:transition duration-500 ease-in-out sm:text-l">
        Gallery
      </Link>
      <Link to="/contact" className="flex justify-center items-center font-bold text-lg transform hover:scale-110 hover:transition duration-500 ease-in-out sm:text-l">
        Contact
      </Link>
    </div>
  );
};

export default Header;
