import React from "react";
import {Link} from "react-router-dom";
import {
  FaEnvelope,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const SideInfo = () => {
  return (
    <div className="grid grid-cols-1 absolute left-0 top-0 text-gray-100 w-32 min-h-screen justify-center items-center text-center sm:hidden md:hidden">
      <span className="flex flex-col justify-between items-center text-center h-60 m-0 m-auto">
        <Link to="/google-login"><FaEnvelope /></Link>
        <Link to="/fojan-twitter"><FaTwitter /></Link>
        <Link to="/fojan-instagram"><FaInstagram /></Link>
        <Link to="/fojan-linkedin"><FaLinkedinIn /></Link>
      </span>
    </div>
  );
};

export default SideInfo;
