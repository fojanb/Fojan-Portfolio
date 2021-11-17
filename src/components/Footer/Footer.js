import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaRegCopyright
} from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <div
        id="footer"
        className="grid grid-rows-1 grid-cols-5 justify-center text-sm items-center top-0 left-0 z-20 py-8 w-1/2 text-gray-500 m-auto border-t border-opacity-10 lg:w-3/4 md:w-3/4 sm:grid-cols-1 sm:gap-5 sm:pb-8"
      >
        <Link
          to="/"
          className="flex justify-center items-center font-normal text-sm transform hover:scale-105 hover:text-gray-100 hover:transition duration-500 ease-in-out sm:text-l"
        >
          Services
        </Link>
        <Link
          to="/contact"
          className="flex justify-center items-center font-normal text-sm transform hover:scale-105 hover:text-gray-100 hover:transition duration-500 ease-in-out sm:text-l sm:border-none"
        >
          Contact
        </Link>
        <Link
          to="/gallery"
          className="flex justify-center items-center font-normal text-sm transform hover:scale-105 hover:text-gray-100 hover:transition duration-500 ease-in-out sm:text-l sm:border-none"
        >
          FAQ
        </Link>
        <div
          
          className="flex justify-center items-center font-normal text-sm sm:text-l md:text-sm md:px-4"
        >
          <FaRegCopyright/>2021-Fojan
        </div>
        <div className="flex justify-evenly items-center font-normal text-sm sm:text-l">
          <FaFacebook className="transform hover:scale-110 hover:text-gray-100 hover:transition duration-500 ease-in-out"/>
          <FaTwitter className="transform hover:scale-110 hover:text-gray-100 hover:transition duration-500 ease-in-out"/>
          <FaInstagram className="transform hover:scale-110 hover:text-gray-100 hover:transition duration-500 ease-in-out"/>
          <FaLinkedinIn className="transform hover:scale-110 hover:text-gray-100 hover:transition duration-500 ease-in-out"/>
        </div>
      </div>
    </div>
  );
};

export default Footer;

// import React from "react";
// import {
//   FaFacebook,
//   FaTwitter,
//   FaInstagram,
//   FaLinkedinIn,
// } from "react-icons/fa";
// const Footer = () => {
//   return (
//     <div className="grid grid-rows-1 grid-cols-5 justify-center text-center items-center m-0 m-auto h-20 absolute bottom-4 left-20 absolute pt-16 pb-12 w-96 text-gray-600 sm:w-48 sm:h-32 sm:grid-cols-1 sm:grid-rows-5 sm:py-4 sm:text-md md:m-auto md:m-0 md:pt-18 md:grid-cols-2 md:grid-rows-3 md:h-60">
//       <div className="flex justify-center items-center text-center ">
//         Socials
//       </div>
//       <div className="flex justify-center items-center text-center">
//         Services
//       </div>
//       <div className="flex justify-center items-center text-center">FAQ</div>
//       <div className="flex justify-center items-center text-center sm:p-2">
//         Contact
//       </div>
//       <div className="flex justify-between items-center text-center w-32 text-gray-600 ml-8 sm:mt-8">
//         <FaFacebook />
//         <FaTwitter />
//         <FaInstagram />
//         <FaLinkedinIn />
//       </div>
//     </div>
//   );
// };

// export default Footer;
