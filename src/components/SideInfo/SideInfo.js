import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const SideInfo = () => {
  return (
    <div className="grid grid-cols-1 absolute left-0 top-0 text-gray-100 w-32 min-h-screen justify-center items-center text-center">
      <span className="flex flex-col justify-between items-center text-center h-60 m-0 m-auto">
        <FaFacebook />
        <FaTwitter />
        <FaInstagram />
        <FaLinkedinIn />
      </span>
    </div>
  );
};

export default SideInfo;
