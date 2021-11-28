import React from "react";
import WorksIcon from "../WorksIcon/WorksIcon";
const Works = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-1 w-2/3 pb-36 m-0 m-auto">
      <p className="bg-blob2 bg-contain bg-center bg-no-repeat flex text-left items-center justify-center text-gray-300 font-bold text-3xl py-14 mt-10 relative z-40 mb-8 sm:bg-secondary sm:w-60 sm:m-auto sm:rounded-2xl sm:mt-8 sm:p-2 sm:text-sm sm:bg-none sm:shadow-2xl md:shadow-2xl md:bg-secondary md:w-60 md:m-auto md:mt-24 md:rounded-2xl md:p-2 md:text-xl md:bg-none lg:text-xl">
        <span className="sm:hidden md:hidden">
          <WorksIcon />
        </span>
        <span className="text-shadow-lg">Works</span>
      </p>
      <p className="flex text-left items-center justify-center text-gray-300 py-8 relative z-40">
        Here you can see some of my personal frontend projects. I have mostly
        used React and public API on them.
      </p>
      <div className="grid grid-rows-1 grid-cols-2 gap-8 text-gray-100 w-1/2  m-auto py-8 lg:w-3/4 md:grid-cols-1 md:w-1/2 galaxy:w-3/4 sm:grid-cols-1 sm:gap-4 ">
        <div className="flex items-center justify-center ">
          <div className="bg-light w-60 h-auto text-left p-4 rounded-xl animate-pulse shadow-2xl">
            <header className="font-bold text-lg p-4 border-b-2 border-opacity-30">
              My Personal Portfolio
            </header>
            <article className="pt-4 text-left">
              This is one those projects that I geniunly made it with true love.
              I have designed each pieces in figma,from icons, avatar and images
              as well as creating a unique and eye-pleasing color palette. The
              technologies I have used are React and TailwindCSS. Let me tell
              ya'll that using Tailwind is a pure joy! It made the whole styling
              proccess so easy, fun and straight forward. Yeah... I can not get
              enough of that. Make sure to try it, you won't regret it. You can
              easily navigate through my portfolio like a single page
              application without to much of loading page and sending request to
              the main server, and it means that I have used react-route-dom in
              the whole proccess.
            </article>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="bg-light w-60 h-auto text-left p-4 rounded-xl animate-pulse shadow-2xl">
            <header className="font-bold text-lg p-4 border-b-2 border-opacity-30">
              Food Reciepe App
            </header>
            <article className="pt-4 text-left">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </article>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="bg-light w-60 h-auto text-left p-4 rounded-xl animate-pulse shadow-2xl">
            <header className="font-bold text-lg p-4 border-b-2 border-opacity-30">
              Covid-API-Canada
            </header>
            <article className="pt-4 text-left">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </article>
          </div>
        </div>

        <div className="hidden sm:flex sm:items-center sm:justify-center md:flex md:items-center md:justify-center">
          <WorksIcon />
        </div>
      </div>
    </div>
  );
};

export default Works;
