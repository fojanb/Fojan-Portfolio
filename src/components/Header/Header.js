import React from "react";
import { FaSearch, FaBars } from "react-icons/fa";
import circle from "../../assets/circle.png";

const Header = () => {
  return (
    <div className="flex-row absolute right-0 w-2/4 justify-center">
      <button className="inline-block m-8 text-gray-300 font-bold text-base	bg-primary px-4 py-1">
        Submit
      </button>
      <div className="inline-block m-8 text-gray-300 font-bold text-base">
        Gallery
      </div>
      <div className="inline-block m-8 text-gray-300 font-bold text-base">
        About
      </div>
      <div className="inline-block m-8 text-gray-300 font-bold text-base">
        Contact
      </div>
      <div className="inline-block px-7 text-gray-300 font-bold text-base	mt-10">
        <FaSearch />
      </div>
      <div className="inline-block text-gray-300 font-bold text-base px-7">
        <FaBars />
      </div>
    </div>
  );
};

export default Header;
