import React from "react";
import { FaSearch, FaBars } from "react-icons/fa";
import circle from "../../assets/circle.png";

const Header = () => {
  return (
    <>
      <div className="inline-block absolute top-8 left-36 -mt-2">
        <img src={circle} alt="" className="w-16 h-16" />
      </div>
      <div className="flex-row absolute right-0 w-2/4 justify-center xl:right-4 w-96">
        <button className="inline-block m-8 text-gray-300 font-bold text-base	bg-primary px-4 py-1 xl:m-4">
          Submit
        </button>
        <div className="inline-block m-8 text-gray-300 font-bold text-base xl:m-4">
          Gallery
        </div>
        <div className="inline-block m-8 text-gray-300 font-bold text-base xl:m-4">
          About
        </div>
        <div className="inline-block m-8 text-gray-300 font-bold text-base xl:m-4">
          Contact
        </div>
        <div className="inline-block w-20 justify-evenly text-gray-300 font-bold text-base mt-10 xl:mt-4">
          <FaSearch className="inline-block ml-4"/>
          <FaBars className="inline-block ml-8"/>

        </div>
        {/* <div className="block text-gray-300 font-bold text-base px-7 xl:mt-4 px-4">
        </div> */}
      </div>
    </>
  );
};

export default Header;
