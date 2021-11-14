import React from "react";
const Footer = () => {
  return (
    <div className="bg-red-500 bg-opacity-20 ">
      <div className="grid grid-rows-1 grid-cols-4 justify-center  items-center text-center w-1/2 p-8 m-auto text-gray-300 text-sm lg:w-1/2 md:text-sm md:grid-cols-1 md:mt-48 sm:grid-cols-1  sm:gap-1 sm:text-base">
        <div className="flex flex-row justify-center items-center">
          Terms & Conditions
        </div>
        <div className="flex flex-row justify-center items-center">
          How to Submit?
        </div>
        <div className="flex flex-row justify-center items-center">FAQ</div>
        <div className="flex flex-row justify-center items-center text-center">
          &copy;2021-Fojan Babaali
        </div>
      </div>
    </div>
  );
};

export default Footer;
