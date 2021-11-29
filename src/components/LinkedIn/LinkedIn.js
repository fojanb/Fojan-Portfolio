import React from "react";
import LinkedInPageIcon from "../LinkedInPageIcon/LinkedInPageIcon";
const LinkedIn = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-1 w-screen h-screen pb-48 m-0 m-auto">
      <div className="flex flex-col text-left items-center justify-center items-center text-lg m-auto text-gray-300 px-14 py-8 relative z-40">
        <p>
          Follow me arround! I do actively post on LinkedIn. Make sure to
          checkout my LinkedIn page.
        </p>
        <a href="https://www.linkedin.com/in/fojanbabaali/" target="_blank">
          <span className="pt-8 font-bold text-greeny hover:text-lightGreeny transform hover:scale-100 hover:transition duration-500 ease-in-out">
            my LinkedIn page
          </span>
        </a>
        <div className="mt-16">
          <LinkedInPageIcon />
        </div>
      </div>
    </div>
  );
};

export default LinkedIn;
