import React from "react";
import circle from "../../assets/circle.png";
const Header = () => {
  return (
    <div className="grid grid-rows-1 grid-cols-5 justify-center text-base items-center w-1/2 text-gray-100 pt-10 m-auto lg:w-3/4 md:w-3/4 sm:grid-cols-1 sm:gap-4">
      <div className="flex justify-center items-center sm:hidden">
        <img src={circle} alt="Story" className="w-12 h-12"/>
      </div>
      <div className="flex justify-center items-center font-bold text-base sm:text-2xl">
        Home
      </div>
      <div className="flex justify-center items-center font-bold text-base sm:text-2xl">
        Gallery
      </div>
      <div className="flex justify-center items-center font-bold text-base sm:text-2xl">
        About
      </div>
      <div className="flex justify-center items-center font-bold text-base sm:text-2xl">
        Contact
      </div>
    </div>
  );
};

export default Header;
