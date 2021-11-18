import React from "react";
import { Link } from "react-router-dom";
import NavBarIcon from "../NavBarIcon/NavBarIcon";
import UserIcon from "../../assets/UserIcon.png";

const NavBar = () => {
  return (
    <div>
      <div className="absolute top-0 left-4 -z-1 sm:-left-60 md:-left-60">
        <NavBarIcon />
      </div>
      <div
        id="navbar"
        className="grid grid-rows-1 grid-cols-5 justify-center text-lg items-center top-0 left-0 z-20 py-8 w-1/2 text-gray-300 m-auto lg:w-3/4 md:w-3/4 sm:grid-cols-1 sm:gap-2 sm:pb-8 sm:border-b sm:border-opacity-10"
      >
        <Link
          to="/"
          className="flex justify-center items-center font-normal text-lg text-shadow-lg transform hover:scale-110 hover:text-gray-100 hover:transition duration-500 ease-in-out sm:text-l"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="flex justify-center items-center font-normal text-lg text-shadow-lg transform hover:scale-110 hover:text-gray-100 hover:transition duration-500 ease-in-out sm:text-l sm:border-none"
        >
          About
        </Link>
        <Link
          to="/works"
          className="flex justify-center items-center font-normal text-lg text-shadow-lg transform hover:scale-110 hover:text-gray-100 hover:transition duration-500 ease-in-out sm:text-l sm:border-none"
        >
          Works
        </Link>
        <Link
          to="/contact"
          className="flex justify-center items-center font-normal text-lg text-shadow-lg transform hover:scale-110 hover:text-gray-100 hover:transition duration-500 ease-in-out sm:text-l sm:border-none"
        >
          Contact
        </Link>
        <div className="flex justify-center items-center z-50">
          <img src={UserIcon} alt="" height="60" width="60"/>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
