import React from "react";
const Footer = () => {
  return (
    <div className="grid grid-rows-1 grid-cols-5 w-3/4 justify-center items-center m-auto text-gray-300 text-xs pb-14 md:pb-12 sm:grid-rows-5 sm:grid-cols-1 sm:bg-red-500 sm:bg-opacity-20 sm:pb-10 sm:pt-8 sm:rounded-t-2xl sm:gap-1 sm:text-base">
      <div className="flex justify-center items-center">Terms & Conditions</div>
      <div className="flex justify-center items-center">How to Submit?</div>
      <div className="flex justify-center items-center">FAQ</div>
      <div className="flex justify-center items-center">Press</div>
      <div className="flex justify-center items-center text-center">
        &copy;2021-Fojan Babaali
      </div>
    </div>
  );
};

export default Footer;
