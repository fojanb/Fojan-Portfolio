import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="grid grid-rows-2 grid-cols-4 justify-center text-center items-center m-0 m-auto max-h-screen absolute bottom-0 py-10 w-full text-gray-300 bg-grey bg-opacity-40 sm:grid-cols-1 sm:py-4 sm:text-md ">
      <div className="flex justify-center items-center text-center ">
        Socials
      </div>
      <div className="flex justify-center items-center text-center">
        Services
      </div>
      <div className="flex justify-center items-center text-center">FAQ</div>
      <div className="flex justify-center items-center text-center">
        Contact
      </div>
      <div className="flex justify-between items-center text-center w-32 text-gray-300">
        <FaFacebook />
        <FaTwitter />
        <FaInstagram />
        <FaLinkedinIn />
      </div>
    </div>
  );
};

export default Footer;
