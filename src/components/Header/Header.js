import React from "react";
import circle from "../../assets/circle.png";
const Header = () => {
  return (
    <div className="grid grid-rows-1 grid-cols-5 justify-center items-center w-1/2 text-gray-100 ml-16 pt-10 m-auto">
      <div className="flex justify-center items-center">
        <img src={circle} alt="Story" className="w-12 h-12"/>
      </div>
      <div className="flex justify-center items-center font-bold text-base border-r border-opacity-50">
        Submit
      </div>
      <div className="flex justify-center items-center font-bold text-base border-r border-opacity-50">
        Gallery
      </div>
      <div className="flex justify-center items-center font-bold text-base border-r border-opacity-50">
        About
      </div>
      <div className="flex justify-center items-center font-bold text-base">
        Contact
      </div>
    </div>
  );
};

export default Header;
