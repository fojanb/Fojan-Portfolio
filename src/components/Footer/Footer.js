import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="grid grid-rows-1 grid-cols-5 justify-center text-center items-center m-0 m-auto h-20 absolute bottom-0 left-20 py-10 w-96 text-gray-600 sm:w-48 sm:h-32 sm:grid-cols-1 sm:grid-rows-2 sm:py-4 sm:text-md md:m-0 md:m-auto lg:grid-cols-2 ">
      <div className="flex justify-center items-center text-center ">
        Socials
      </div>
      <div className="flex justify-center items-center text-center">
        Services
      </div>
      <div className="flex justify-center items-center text-center">FAQ</div>
      <div className="flex justify-center items-center text-center sm:p-2">
        Contact
      </div>
      <div className="flex justify-between items-center text-center w-32 text-gray-600 ml-8 sm:mt-8">
        <FaFacebook />
        <FaTwitter />
        <FaInstagram />
        <FaLinkedinIn />
      </div>
    </div>
  );
};

export default Footer;
