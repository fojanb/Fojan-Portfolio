import React from "react";
import {FaRegCopyright} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="flex-row w-full h-12 absolute bottom-1 text-gray-400 justify-center items-center">
      <div className="inline-block ml-36"><FaRegCopyright className="inline-block pr-1"/>2021-All Rights Reserved</div>
      <div className="inline-block ml-96 absolute right-36">
        <div className="inline-block ml-8">Legal Disclaimer</div>
        <div className="inline-block ml-8">Terms & Conditions</div>
        <div className="inline-block ml-8">How to Submit?</div>
        <div className="inline-block ml-8">FAQ</div>
        <div className="inline-block ml-8">Press</div>
      </div>
    </div>
  );
};

export default Footer;
