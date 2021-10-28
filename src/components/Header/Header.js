import React from "react";
import circle from "../../assets/circle.png";

const Header = () => {
  return (
    <>
      <div className="inline-block absolute top-8 left-36 -mt-2">
        <img src={circle} alt="" className="w-16 h-16" />
      </div>
      <div className="flex-row absolute right-0 p-1 justify-center items-center	mr-36 xl:mr-20 lg:mr-16 lgg:mr-11 md:mr-8 sm:mr-0 sm:mr-0">
        <button className="inline-block m-8 text-gray-300 font-bold text-base	bg-primary px-4 py-1 xl:m-4 lg:m-2 sm:text-xs">
          Submit
        </button>
        <div className="inline-block m-8 text-gray-300 font-bold text-base xl:m-4 lg:m-1 lgg:m-1 sm:text-xs sm:m-0">
          Gallery
        </div>
        <div className="inline-block m-8 text-gray-300 font-bold text-base xl:m-4 lg:m-1 lgg:m-1 sm:text-xs sm:m-0">
          About
        </div>
        <div className="inline-block m-8 text-gray-300 font-bold text-base xl:m-4 lg:m-1 lgg:m-1 sm:text-xs sm:m-0">
          Contact
        </div>
      </div>
    </>
  );
};

export default Header;
