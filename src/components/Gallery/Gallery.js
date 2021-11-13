import React from "react";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img6 from "../../assets/img6.png";
import img7 from "../../assets/img7.png";
import img8 from "../../assets/img8.png";
import img9 from "../../assets/img9.png";

const Gallery = () => {
  return (
    <div className="pb-36">
      {/* <hr className="w-5/6 m-auto opacity-40" /> */}
      <p className="bg-blob2 bg-contain bg-center bg-no-repeat flex text-left items-center justify-center text-gray-100 font-bold text-3xl py-24 mt-20 mb-16 sm:bg-red-500 sm:bg-opacity-20 sm:w-5/6 sm:m-auto sm:rounded-2xl sm:mt-8 sm:p-2 sm:text-sm sm:bg-none md:bg-red-500 md:bg-opacity-20 md:w-5/6 md:m-auto md:mt-8 md:rounded-2xl md:p-2 md:text-xl md:bg-none">Gallery</p>
      <div className="grid grid-rows-2 grid-cols-3 gap-8 text-gray-100 w-1/2 m-auto py-8 sm:grid-cols-1 sm:gap-4">
        <div className="flex items-center justify-center">
          <img src={img1} alt="" />
        </div>
        <div className="flex items-center justify-center">
          <img src={img2} alt="" />
        </div>
        <div className="flex items-center justify-center">
          <img src={img6} alt="" />
        </div> <div className="flex items-center justify-center">
          <img src={img7} alt="" />
        </div>
        <div className="flex items-center justify-center">
          <img src={img8} alt="" />
        </div>
        <div className="flex items-center justify-center">
          <img src={img9} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;

