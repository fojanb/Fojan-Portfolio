import React from "react";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import img5 from "../../assets/img5.png";
import img6 from "../../assets/img6.png";
import img7 from "../../assets/img7.png";
import img8 from "../../assets/img8.png";
import img9 from "../../assets/img9.png";

const Gallery = () => {
  return (
    <div>
      <hr className="w-5/6 m-auto opacity-40" />
      <p className="flex text-left items-center justify-center text-gray-100 font-bold text-3xl py-8">Gallery</p>
      <div className="grid grid-rows-3 grid-cols-3 gap-10 text-gray-100 w-1/2 m-auto py-8">
        <div className="flex">
          <img src={img1} alt="" />
        </div>
        <div className="flex">
          <img src={img2} alt="" />
        </div>
        <div className="flex">
          <img src={img3} alt="" />
        </div>
        <div className="flex">
          <img src={img4} alt="" />
        </div>
        <div className="flex">
          <img src={img5} alt="" />
        </div>
        <div className="flex">
          <img src={img6} alt="" />
        </div> <div className="flex">
          <img src={img7} alt="" />
        </div>
        <div className="flex">
          <img src={img8} alt="" />
        </div>
        <div className="flex">
          <img src={img9} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
