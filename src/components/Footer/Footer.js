import React from "react";

const Footer = () => {
  return (
    <footer className="grid grid-cols-4 justify-center text-center items-center m-0 m-auto max-h-screen absolute bottom-0 py-10 w-full text-gray-300 bg-grey bg-opacity-40 sm:grid-cols-1 sm:py-4 sm:text-md sm:mt-8 ">
      <div className="flex justify-center items-center text-center">Socials</div>
      <div className="flex justify-center items-center text-center">Services</div>
      <div className="flex justify-center items-center text-center">FAQ</div>
      <div className="flex justify-center items-center text-center">Contact</div>
    </footer>
  );
};

export default Footer;
