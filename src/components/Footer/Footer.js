import React from "react";
const Footer = () => {
  return (
    <div className="grid grid-rows-1 grid-cols-3 w-1/2 justify-center items-center m-auto text-gray-300 text-xs">
      <div>
        <div className="flex justify-center items-center">
          &copy;2021-All Rights Reserved-Fojan Babaali
        </div>
      </div>
      <div>
        <div className="flex justify-center items-center">
          Terms & Conditions
        </div>
        <div className="flex justify-center items-center">How to Submit?</div>
      </div>
      <div>
        <div className="flex justify-center items-center">FAQ</div>
        <div className="flex justify-center items-center">Press</div>
      </div>
    </div>
  );
};

export default Footer;
