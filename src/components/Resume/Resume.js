import React from "react";
import { Link } from "react-router-dom";
const Resume = () => {
  return (
    <div className="grid grid-cols-1 w-8/12 gap-12 m-auto m-0 text-gray-300">
      <span className="bg-blob4 bg-contain bg-center bg-no-repeat flex justify-center text-2xl font-bold items-center p-14 text-gray-300 text-shadow-lg z-20">
        My Resume
      </span>
      <div className="grid grid-rows-3 grid-cols-2 gap-8 h-screen z-20">
        <div className="flex justify-center items-center m-0 m-auto">When I started university I originally had the idea of going into
          graphic design, but after building my first website, I was hooked. The
          internet was my outlet. A new way to show and share my passions. Ended
          with master of computer engineering at faculty of engineering at UIT.
          I am so happy that I made that decision.Professional Expertise</div>
        <div className="flex justify-center items-center text-center m-0 m-auto">Technical Expertise</div>
        <div className="flex justify-center items-center text-center m-0 m-auto">Experiences</div>
        <div className="flex justify-center items-center text-center m-0 m-auto">Education </div>
        <div className="flex justify-center items-center text-center m-0 m-auto">Hobbies </div>
        <div className="bg-blob5 bg-contain bg-center bg-no-repeat flex justify-center items-center m-auto text-sm w-28 mt-28 p-12 text-gray-300 text-shadow-lg transform hover:scale-110 hover:text-gray-100 hover:transition duration-500 ease-in-out ">
          <Link to="/about">Back</Link>
        </div>
      </div>
    </div>
  );
};

export default Resume;
