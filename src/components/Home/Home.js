import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
const joinHandler = () => {
  console.log("Link to the join page");
};
const Home = () => {
  return (
    <div className="grid grid-rows-2 grid-cols-1 justify-center items-center m-auto px-28 md:px-14 sm:px-8 sm:m-auto">
      <div className="flex flex-col text-5xl text-gray-100 font-bold pt-24 lg:text-4xl md:text-3xl md:pt-14 galaxy:text-3xl sm:text-xl sm:m-auto sm:justify-center sm:items-center">
        <h1 className="m-auto sm:text-2xl sm:text-center">FOJAN BABAALI</h1>
        <div className="flex m-auto text-base text-gray-100">
          <FaMapMarkerAlt className="m-auto mt-5 sm:text-xs" />
          <span className="italic m-auto mt-4 mb-8 sm:text-sm">
            Vancouver, CA
          </span>
        </div>
      </div>
      <div className="flex flex-row flex-wrap text-gray-100 w-72 justify-between m-auto md:justify-evenly galaxy:justify-evenly sm:justify-evenly sm:w-40">
        <button
          onClick={joinHandler}
          className="bg-ruby font-bold border rounded text-xl px-10 py-2 transform hover:scale-110 hover:transition duration-500 ease-in-out sm:text-sm sm:w-40 sm:h-10 sm:mb-5"
        >
          Join
        </button>

        <button className="font-bold text-xl border rounded px-4 py-2 text-center transform hover:scale-110 hover:transition duration-500 ease-in-out sm:text-sm sm:w-40 sm:h-10">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Home;
