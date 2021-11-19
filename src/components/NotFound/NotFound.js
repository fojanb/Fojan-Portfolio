import React from "react";
import NotFoundIcon from "../NotFoundIcon/NotFoundIcon";

const Notfound = () => {
  return (
    <div className="grid grid-rows-2 grid-cols-1 w-1/3 text-center m-auto m-0 text-3xl text-gray-300 z-20 h-screen">
      <p className="flex justify-between items-center text-center m-0 m-auto">
        Oops! Not such a URL existed...
      </p>
      <div className="flex justify-between items-center text-center m-0 m-auto pb-80">
        <NotFoundIcon />
      </div>
    </div>
  );
};

export default Notfound;
