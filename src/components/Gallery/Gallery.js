import React from "react";
const Gallery = () => {
  return (
    <div className="pb-36 m-0 m-auto">
      <p className="bg-blob2 bg-contain bg-center bg-no-repeat flex text-left items-center justify-center text-gray-300 font-bold text-3xl py-14 mt-10 relative z-50 mb-8 sm:bg-secondary sm:w-60 sm:m-auto sm:rounded-2xl sm:mt-8 sm:p-2 sm:text-sm sm:bg-none sm:shadow-2xl md:shadow-2xl md:bg-secondary md:w-60 md:m-auto md:mt-24 md:rounded-2xl md:p-2 md:text-xl md:bg-none lg:text-xl">
        Works
      </p>
      <div className="grid grid-rows-1 grid-cols-3 gap-8 text-gray-100 w-1/2 m-auto py-8 lg:w-3/4 md:grid-cols-1 md:w-1/2 galaxy:w-1/2 sm:grid-cols-1 sm:gap-4 ">
        <div className="flex items-center justify-center">
          <div className="bg-indigo-900 w-60 h-auto text-left p-4 rounded-xl animate-pulse shadow-2xl">
            <header className="font-bold text-lg p-4 border-b-2 border-opacity-30">
              Project-1
            </header>
            <article className="pt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </article>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="bg-indigo-900 w-60 h-auto text-left p-4 rounded-xl animate-pulse shadow-2xl">
            <header className="font-bold text-lg p-4 border-b-2 border-opacity-30">
              Project-2
            </header>
            <article className="pt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </article>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="bg-indigo-900 w-60 h-auto text-left p-4 rounded-xl animate-pulse shadow-2xl">
            <header className="font-bold text-lg p-4 border-b-2 border-opacity-30">
              Project-3
            </header>
            <article className="pt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
