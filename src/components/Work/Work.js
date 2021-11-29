import React from "react";

const Work = (props) => {
  let { title, description, link } = props;
  return (
    <div className="flex items-center justify-center">
      <div className="bg-light bg-opacity-30 w-full h-auto text-left p-4 rounded-xl shadow-md">
        <header className="bg-blob6 bg-contain bg-center bg-no-repeat flex items-center text-center justify-center w-64 font-bold text-lg text-gray-300 p-8">
          {title}
        </header>
        <article className="pt-4 text-left text-gray-300">
          {description}
          <div className="flex items-left w-60 text-sm p-8">
            <span className="font-bold text-greeny hover:text-lightGreeny transform hover:scale-100 hover:transition duration-500 ease-in-out">
              <a
                href={link}
                target="_blank"
              >
                GitHub Repository&nbsp;<span>→</span>
              </a>
            </span>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Work;
