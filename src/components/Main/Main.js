import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
const Main = () => {
  return (
    <div className="grid grid-rows-2 grid-cols-1 justify-center items-center m-auto px-28 md:px-14 sm:px-8 sm:m-auto">
      <div className="felx text-5xl text-gray-100 font-bold pt-24 lg:text-4xl md:text-3xl md:pt-20 md:pr-10 galaxy:text-xl sm:-mt-10 sm:text-xl sm:m-auto sm:justify-center sm:items-center">
        <h1>SARAH NILSON</h1>
        <div className="flex text-base text-gray-100">
          <FaMapMarkerAlt className="mt-5" />
          <span className="italic mt-4">Vancouver, CA</span>
        </div>
      </div>
      <div className="flex flex-wrap text-gray-100 ">
        <button className="bg-ruby font-bold border text-xl px-10 py-2 rounded sm:text-sm sm:w-40 sm:h-10 sm:mb-5">
          Join
        </button>
        <button className="font-bold text-xl border px-4 py-2 text-center rounded sm:text-sm sm:w-40 sm:h-10">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Main;
