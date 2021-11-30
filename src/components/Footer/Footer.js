import React from "react";
import { Link } from "react-router-dom";
import Envelope from "../Envelope/Envelope";
import TwitterIcon from "../TwitterIcon/TwitterIcon";
import InstagramIcon from "../InstagramIcon/InstagramIcon";
import LinkedInIcon from "../LinkedInIcon/LinkedInIcon";
import CopyRightIcon from "../CopyRightIcon/CopyRightIcon";
const Footer = () => {
  return (
    <div>
      <div
        id="footer"
        className="grid grid-rows-1 grid-cols-3 justify-center text-sm items-center top-0 left-0 z-20 py-8 w-1/2 text-gray-500 m-auto border-t border-opacity-10 lg:w-3/4 md:w-3/4 sm:grid-cols-1 sm:gap-5 sm:pb-8"
      >
        <div className="flex justify-center items-center font-normal text-sm m-0 m-auto sm:text-l md:text-sm md:px-4">
          <CopyRightIcon />
          <span className="pl-1 text-greeny">Fojan Babaali 2021</span>
        </div>
        <Link
          to="/contact"
          className="flex justify-center items-center font-normal text-sm text-greeny transform hover:scale-105 hover:transition duration-500 ease-in-out sm:text-l sm:border-none"
        >
          Contact
        </Link>
        <div className="flex justify-evenly items-center font-normal text-sm sm:text-l">
          <Link to="/google-login">
            <div className="transform hover:scale-110 hover:text-gray-100 hover:transition duration-500 ease-in-out">
              <Envelope/>
            </div>
          </Link>
          <div className="transform hover:scale-110 hover:text-gray-100 hover:transition duration-500 ease-in-out">
            <TwitterIcon />
          </div>
          <div className="transform hover:scale-110 hover:text-gray-100 hover:transition duration-500 ease-in-out">
            <InstagramIcon />
          </div>
          <Link to="/fojan-linkedin" className="transform hover:scale-110 hover:text-gray-100 hover:transition duration-500 ease-in-out">
            <LinkedInIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
