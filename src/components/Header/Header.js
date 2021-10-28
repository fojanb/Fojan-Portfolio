import React from "react";
import circle from "../../assets/circle.png";

const Header = () => {
  return (
    <>
      <div className="inline-block absolute top-8 left-8 ml-24">
        <img src={circle} alt="" className="w-12 h-12" />
      </div>
      <div className="flex-row absolute right-0 pl-20 justify-center items-center mr-24">
        <button className="inline-block m-8 text-gray-300 font-bold text-base	bg-primary px-4 py-1 xl:m-8 lg:m-1 sm:text-xs sm:m-1">
          Submit
        </button>
        <div className="inline-block m-8 text-gray-300 font-bold text-base xl:m-8 lg:m-1 smm:p-1  sm:text-xs sm:m-1 ">
          Gallery
        </div>
        <div className="inline-block m-8 text-gray-300 font-bold text-base xl:m-8 lg:m-1  smm:p-1 sm:text-xs sm:m-1 ">
          About
        </div>
        <div className="inline-block m-8 text-gray-300 font-bold text-base xl:m-8 lg:m-1 smm:p-1 sm:text-xs sm:m-1 ">
          Contact
        </div>
      </div>
    </>
  );
};

export default Header;
