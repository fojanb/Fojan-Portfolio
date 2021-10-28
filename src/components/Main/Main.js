import React from "react";
import ArrowRight from "../../assets/arrRight.png";
// import camera from "../../assets/camera.png";
import { FaMapMarkerAlt } from "react-icons/fa";
const Main = () => {
  return (
    <>
      <div className="text-gray-300 absolute right-48 bottom-96 -mb-10 camera:right-20 camera:-mb-16">
        21 April 2021
      </div>
      <img
        src={ArrowRight}
        alt="Arrow Right"
        className="absolute right-0 bottom-72 w-72 camera:w-44"
      />
      <article className="border-b-2 border-opacity-50 text-gray-300 italic absolute top-40 text-2xl left-36 p-4 -ml-3 lg:left-24">
        “Your first 10,000 photographs are your worst.”
        <br />
        <span className="text-sm">-H.Bresson</span>
      </article>
      <div className="text-5xl text-gray-300 absolute left-36 top-80 font-bold lg:left-24">
        <h1 className="inline-block lg:text-4xl">FOJAN</h1>
        {/* <img
          src={camera}
          alt="Camera Icon"
          className="absolute left-96 ml-40 -bottom-9 w-96 camera:w-32 camera:-bottom-15 remove:hidden"
        /> */}
      </div>
      <div className="text-base text-gray-300 absolute left-36 top-96 lg:left-24">
        <FaMapMarkerAlt className="inline-block mb-2" />
        <span className="italic lg:text-sm">Vancouver, CA</span>
      </div>
      <button className="bg-secondary text-gray-300 font-bold text-2xl px-8 py-2 absolute left-32 top-80 mt-40 lg:w-32 lg:text-sm lg:left-24">
        Join Me
      </button>
      <button className="text-gray-300 font-bold text-2xl px-8 py-1.5 absolute left-64 top-80 mt-40 ml-10 border lg:w-32 lg:text-sm lg:ml-4 lg:left-60">
        Subscribe
      </button>
    </>
  );
};

export default Main;
