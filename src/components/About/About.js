import React from "react";
import AboutIcon from "../AboutIcon/AboutIcon";
import { Route, Link } from "react-router-dom";
import Story from "../Story/Story";
import Resume from "../Resume/Resume";
import FileSaver from "file-saver";
const About = () => {
  const saveFile = () => {
    FileSaver.saveAs(
      `http://localhost:3000/src/assets/Fojan-CV.pdf`,
      "Fojan-Babaali-CV.pdf"
    );
  };
  return (
    <div>
      <div className="grid grid-rows-1 grid-cols-2 text-gray-300 w-2/3 m-auto pt-14 pb-32 sm:grid-cols-1 sm:gap-4 md:grid-cols-1 md:gap-4 lg:gap-8 lg:grid-cols-1 lg:w-3/6">
        <p className="bg-blob4 bg-contain bg-center bg-no-repeat flex justify-center items-center text-center text-gray-300 font-bold text-3xl p-20 z-20 sm:bg-secondary sm:rounded-2xl sm:p-2 sm:text-sm sm:bg-none md:bg-secondary md:rounded-2xl md:p-2 md:text-xl md:bg-none lg:text-xl">
          About Fojan
        </p>

        <p className="flex justify-center items-center text-left text-justify z-20 sm:mb-18 md:mb-18 galaxy:mb-18">
          Hey! It's me, Fojan. I'm a self-motivated frontend developer and UI/UX designer, located
          in beautiful BC, Canada. If you're just curious about my story, or you
          just want to grab my resume, you're in the right spot.
          <br />
          <br />
        </p>
        <div className="mt-4 m-auto m-0">
          <AboutIcon />
        </div>
        <div className="flex flex-row justify-evenly items-center text center sm:flex-col md:flex-col">
          <Link to="/about/story">
            <span className="bg-blob5 bg-contain bg-center bg-no-repeat flex justify-center items-center p-8 text-gray-300 font-bold transform hover:scale-110 hover:text-gray-100 hover:transition duration-500 ease-in-out sm:p-8 sm:mb-4 md:mb-4 md:text-sm">
              My Story
            </span>
          </Link>
          <Link to="/about/resume" onClick={saveFile}>
            <span className="bg-blob5 bg-contain bg-center bg-no-repeat flex justify-center items-center p-8 text-gray-300 font-bold transform hover:scale-110 hover:text-gray-100 hover:transition duration-500 ease-in-out sm:p-8 sm:mt-4 md:mt-4 md:text-sm">
              My Resume
            </span>
          </Link>
        </div>
      </div>
      <Route path="/about/story" exact component={Story} />
      <Route path="/about/resume" exact component={Resume} />
    </div>
  );
};

export default About;
