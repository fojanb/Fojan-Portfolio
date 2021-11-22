import React from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import HomeIcon from "../HomeIcon/HomeIcon";
import MistFirst from "../MistFirst/MistFirst";
const joinHandler = () => {
  console.log("Link to the join page");
};
const Home = () => {
  return (
    <div className="grid grid-rows-2 grid-cols-2 justify-center items-center m-auto px-28 lg:grid-cols-1 md:px-14 sm:px-8 sm:m-auto">
      <div className="flex flex-col text-5xl text-gray-300 font-bold pt-24 lg:text-4xl md:text-3xl md:pt-14 galaxy:text-3xl sm:text-xl sm:m-auto sm:justify-center sm:items-center">
        <h1 className="m-auto z-20 text-shadow-lg sm:text-2xl sm:text-center">
          FOJAN BABAALI
        </h1>
        <p className="text-lg text-center z-20 text-shadow-md py-4 sm:text-lg">
          Frontend Developer
        </p>

        <div className="flex m-auto text-base text-gray-300">
          <FaMapMarkerAlt className="m-auto mt-5 text-red-500 opacity-70 sm:text-xs" />
          <span className="italic text-gray-300 m-auto mt-4 mb-8 z-20 text-shadow-md sm:text-sm">
            Vancouver, CA
          </span>
        </div>
        <div className="relative m-0 m-auto">
          <HomeIcon />
        </div>
      </div>
      <div className="text-gray-100">
        <p>Hey! It's me, Fojan. I'm a self-motivated frontend developer, located in
        beautiful BC, Canada. If you're just curious about my story, or you just
        want to grab my resume, you're in the right spot.Hey! It's me, Fojan.
        I'm a self-motivated frontend developer, located in beautiful BC,
        Canada. If you're just curious about my story, or you just want to grab
        my resume, you're in the right spot.Hey! It's me, Fojan. I'm a
        self-motivated frontend developer, located in beautiful BC, Canada. If
        you're just curious about my story, or you just want to grab my resume,
        you're in the right spot.Hey! It's me, Fojan.
        </p><br/>
        <p>I'm a self-motivated
        frontend developer, located in beautiful BC, Canada. If you're just
        curious about my story, or you just want to grab my resume, you're in
        the right spot.Hey! It's me, Fojan. I'm a self-motivated frontend
        developer, located in beautiful BC, Canada. If you're just curious about
        my story, or you just want to grab my resume, you're in the right
        spot.Hey! It's me, Fojan. I'm a self-motivated frontend developer,
        located in beautiful BC, Canada. If you're just curious about my story,
        or you just want to grab my resume, you're in the right spot.Hey! It's
        me, Fojan. I'm a self-motivated frontend developer, located in beautiful
        BC, Canada. If you're just curious about my story, or you just want to
        grab my resume, you're in the right spot.</p>
      </div>
      <div className="flex flex-row flex-wrap text-gray-100 w-72 justify-between m-auto md:justify-evenly galaxy:justify-evenly sm:justify-evenly sm:w-40">
        <Link to="/home/join">
          <button
            onClick={joinHandler}
            className="bg-secondary shadow-md text-gray-300 rounded text-xl px-10 py-2 transform hover:scale-110 hover:transition duration-500 ease-in-out sm:text-sm sm:w-40 sm:h-10 sm:mb-5"
          >
            Join
          </button>
        </Link>
        <button className="text-xl shadow-md border border-opacity-30 text-gray-300 rounded px-4 py-2 text-center transform hover:scale-110 hover:transition duration-500 ease-in-out sm:text-sm sm:w-40 sm:h-10">
          Subscribe
        </button>
      </div>
      
      <div className="relative m-0 m-auto">
        <MistFirst/>
      </div>
    </div>
  );
};

export default Home;
