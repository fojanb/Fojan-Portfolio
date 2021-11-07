import React from "react";
import circle from "../../assets/circle.png";
const Header = () => {
  return (
    <div className="grid grid-rows-1 grid-cols-5 justify-center items-center w-1/2 text-gray-100 ml-16 pt-10 m-auto lg:w-3/4 md:w-3/4 sm:pr-10 sm:grid-rows-2 sm:grid-cols-3">
      <div className="flex justify-center items-center">
        <img src={circle} alt="Story" className="w-12 h-12 sm:w-8 sm:h-8"/>
      </div>
      <div className="flex justify-center items-center font-bold text-base sm:text-xs">
        Submit
      </div>
      <div className="flex justify-center items-center font-bold text-base sm:text-xs">
        Gallery
      </div>
      <div className="flex justify-center items-center font-bold text-base sm:text-xs">
        About
      </div>
      <div className="flex justify-center items-center font-bold text-base sm:text-xs">
        Contact
      </div>
    </div>
  );
};

export default Header;
