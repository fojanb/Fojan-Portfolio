import React from "react";
import circle from "../../assets/circle.png";
const Header = () => {
  return (
    <div className="grid grid-rows-1 grid-cols-5 justify-center items-center w-1/2 p-14 text-gray-100">
      <div className="flex justify-center items-center">
        <img src={circle} alt="Story" className="w-12 h-12" />
      </div>
      <div className="flex justify-center items-center ">
        <button className="font-bold text-base bg-primary px-4 py-1">
          Submit
        </button>
      </div>
      <div className="flex justify-center items-center font-bold text-base">
        Gallery
      </div>
      <div className="flex justify-center items-center font-bold text-base">
        About
      </div>
      <div className="flex justify-center items-center font-bold text-base">
        Contact
      </div>
    </div>
  );
};

export default Header;
