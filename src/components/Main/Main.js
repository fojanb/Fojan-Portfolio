import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
const Main = () => {
  return (
    <div className="grid grid-rows-2 grid-cols-1 justify-center items-center m-auto px-28">
      <div className="felx text-5xl text-gray-100 font-bold pt-24">
        <h1>SARAH NILSON</h1>
        <div className="flex text-base text-gray-100">
          <FaMapMarkerAlt className="mt-5" />
          <span className="italic mt-4">Vancouver, CA</span>
        </div>
      </div>
      <div className="flex items-start text-gray-100">
        <button className="bg-ruby font-bold border text-xl px-10 py-2 rounded">
          Join
        </button>
        <button className="font-bold text-xl border px-4 py-2 ml-10 rounded">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Main;
