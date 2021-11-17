import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="grid grid-rows-1 grid-cols-5 justify-center text-center items-center m-0 m-auto h-20 absolute bottom-4 left-20 absolute pt-16 pb-12 w-96 text-gray-600 sm:w-48 sm:h-32 sm:grid-cols-1 sm:grid-rows-5 sm:py-4 sm:text-md md:m-auto md:m-0 md:pt-18 md:grid-cols-2 md:grid-rows-3 md:h-60">
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
