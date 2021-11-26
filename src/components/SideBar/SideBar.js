import React from "react";
import { Link } from "react-router-dom";
import Envelope from "../Envelope/Envelope";
import TwitterIcon from "../TwitterIcon/TwitterIcon";
import InstagramIcon from "../InstagramIcon/InstagramIcon";
import LinkedInIcon from "../LinkedInIcon/LinkedInIcon";
import Burger from "../Burger/Burger";

const SideBar = () => {
  return (
    <div className="">
      <div className=" grid grid-cols-1 absolute left-0 top-0 text-gray-300 w-20 min-h-full justify-center items-center text-center sm:hidden md:hidden">
        <div className="flex flex-col justify-between items-center text-center h-60 m-0 m-auto z-50 fixed top-32 left-8">
          <div className="cursor-pointer transform hover:scale-125 hover:text-gray-100 hover:transition duration-500 ease-in-out">
            <Burger />
          </div>
          <Link
            to="/google-login"
            className="transform hover:scale-125 hover:text-gray-100 hover:transition duration-500 ease-in-out"
          >
            <Envelope />
          </Link>
          <Link
            to="/fojan-twitter"
            className="transform hover:scale-125 hover:text-gray-100 hover:transition duration-500 ease-in-out"
          >
            <TwitterIcon />
          </Link>
          <Link
            to="/fojan-instagram"
            className="transform hover:scale-125 hover:text-gray-100 hover:transition duration-500 ease-in-out"
          >
            <InstagramIcon />
          </Link>
          <Link
            to="/fojan-linkedin"
            className="transform hover:scale-125 hover:text-gray-100 hover:transition duration-500 ease-in-out"
          >
            <LinkedInIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
