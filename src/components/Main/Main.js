import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
const Main = () => {
  return (
    <div className="grid grid-rows-2 grid-cols-1 justify-center items-center p-14">
      <div className="felx text-5xl text-gray-100 font-bold">
        <div className="flex-cols h-24 italic text-2xl ">
          <p>“Your first 10,000 photographs are your worst.”</p>
          <span className="text-sm">-H.Bresson</span>
          <hr className="w-60"/>
        </div>
        <h1 className="mt-5">FOJAN</h1>
        <div className="flex text-base text-gray-100">
          <FaMapMarkerAlt className="mt-4" />
          <span className="italic mt-4">Vancouver, CA</span>
        </div>
      </div>
      <div className="flex items-start text-gray-100">
        <button className="bg-secondary font-bold border text-xl px-10 py-2">
          Join
        </button>
        <button className="font-bold text-xl border px-4 py-2 ml-10">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Main;
