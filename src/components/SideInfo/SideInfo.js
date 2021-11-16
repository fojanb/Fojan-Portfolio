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
      <div className=" bg-secondary grid grid-cols-1 absolute left-0 top-0 text-gray-100 w-32 min-h-screen justify-center items-center text-center sm:hidden md:hidden">
        <div className="flex flex-col justify-between items-center text-center absolute top-10 left-14 m-auto">
          <FaBars />
        </div>
        <div className="flex flex-col justify-between items-center text-center h-60 m-0 m-auto">
          <Link to="/google-login">
            <FaEnvelope />
          </Link>
          <Link to="/fojan-twitter">
            <FaTwitter />
          </Link>
          <Link to="/fojan-instagram">
            <FaInstagram />
          </Link>
          <Link to="/fojan-linkedin">
            <FaLinkedinIn />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideInfo;
