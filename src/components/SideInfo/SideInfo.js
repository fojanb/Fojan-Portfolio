import React from "react";
import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaBars,
} from "react-icons/fa";

const SideInfo = () => {
  return (
    <div className="">
      <div className="bg-gradient-to-b from-indigo-900 via-indigo-900 to-gray-900 grid grid-cols-1 absolute left-0 top-0 text-gray-300 w-20 min-h-full justify-center items-center text-center sm:hidden md:hidden">
        <div className="flex flex-col justify-between items-center text-center h-60 m-0 m-auto z-50 fixed top-32 left-8">
          <div className="transform hover:scale-125 hover:text-gray-100 hover:transition duration-500 ease-in-out">
            {" "}
            <FaBars />
          </div>

          <Link
            to="/google-login"
            className="transform hover:scale-125 hover:text-gray-100 hover:transition duration-500 ease-in-out"
          >
            <FaEnvelope />
          </Link>
          <Link
            to="/fojan-twitter"
            className="transform hover:scale-125 hover:text-gray-100 hover:transition duration-500 ease-in-out"
          >
            <FaTwitter />
          </Link>
          <Link
            to="/fojan-instagram"
            className="transform hover:scale-125 hover:text-gray-100 hover:transition duration-500 ease-in-out"
          >
            <FaInstagram />
          </Link>
          <Link
            to="/fojan-linkedin"
            className="transform hover:scale-125 hover:text-gray-100 hover:transition duration-500 ease-in-out"
          >
            <FaLinkedinIn />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideInfo;
