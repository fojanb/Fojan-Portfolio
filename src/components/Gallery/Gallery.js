import React from "react";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
const Gallery = () => {
  return (
    <div className="pb-36 z-20">
      <p className="bg-blob2 bg-contain bg-center bg-no-repeat flex text-left items-center justify-center text-gray-100 font-bold text-3xl py-14 mt-10 mb-8 z-20 sm:bg-secondary sm:w-5/6 sm:m-auto sm:rounded-2xl sm:mt-8 sm:p-2 sm:text-sm sm:bg-none sm:shadow-2xl md:shadow-2xl md:bg-secondary md:w-5/6 md:m-auto md:mt-8 md:rounded-2xl md:p-2 md:text-xl md:bg-none">
        Works
      </p>
      <div className="grid grid-rows-1 grid-cols-3 gap-8 text-gray-100 w-1/2 m-auto py-8 lg:w-3/4 md:grid-cols-1 md:w-1/2 galaxy:w-1/2 sm:grid-cols-1 sm:gap-4">
        <div className="flex items-center justify-center">
          <img src={img1} alt="" />
        </div>
        <div className="flex items-center justify-center">
          <img src={img2} alt="" />
        </div>
        <div className="flex items-center justify-center">
          <img src={img3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
