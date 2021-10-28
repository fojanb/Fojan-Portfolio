import React from "react";
import { FaRegCopyright } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="flex-row bg-gray-500 w-full h-20 absolute bottom-1 text-gray-400 justify-center items-center text-xs lg:w-1/2 lg:left-72 lg:grid-cols-1">
      <div className="inline-block ml-40">
        <FaRegCopyright className="inline-block pb-1" />
        <span>2021-All Rights Reserved</span>
      </div>
      <div className="inline-block ml-96 absolute right-44 xl:right-24 lg:ml-1">
        <div className="inline-block ml-2">Legal Disclaimer</div>
        <div className="inline-block ml-2">Terms & Conditions</div>
        <div className="inline-block ml-2">How to Submit?</div>
        <div className="inline-block ml-2">FAQ</div>
        <div className="inline-block ml-2">Press</div>
      </div>
    </div>
  );
};

export default Footer;
