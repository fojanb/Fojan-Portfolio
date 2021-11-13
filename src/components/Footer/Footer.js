import React from "react";
const Footer = () => {
  return (
    <div className="bg-red-500 bg-opacity-20">
        <div className="grid grid-rows-1 grid-cols-4 justify-center items-center text-center w-1/2 mt-24 p-10 m-auto text-gray-300 overflow-hidden text-sm lg:w-1/2 md:text-sm md:grid-cols-2 md:w-1/2 sm:grid-rows-5 sm:grid-cols-1 sm:pb-10 sm:pt-8 sm:gap-1 sm:text-base">
          <div className="flex flex-row justify-center items-center">Terms & Conditions</div>
          <div className="flex flex-row justify-center items-center">How to Submit?</div>
          <div className="flex flex-row justify-center items-center">FAQ</div>
          <div className="flex flex-row justify-center items-center text-center">
            &copy;2021-Fojan Babaali
          </div>
        </div>
    </div>
  );
};

export default Footer;
