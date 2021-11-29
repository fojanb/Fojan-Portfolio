import React from "react";
import { Link } from "react-router-dom";
import Vase from "../Vase/Vase";
const Story = () => {
  return (
    <div className="grid grid-cols-1 w-8/12 gap-12 m-auto m-0 text-gray-300">
      <span className="bg-blob4 bg-contain bg-center bg-no-repeat flex justify-center text-2xl font-bold items-center p-14 text-gray-300 z-20">
        My Story
      </span>
      <div className="grid grid-rows-3 grid-cols-2 gap-8 z-20 lg:grid-rows-1 lg:grid-cols-1 md:grid-rows-1 sm:grid-rows-1">
        <div>
          In highschool, I was that kid that seemed to never be paying
          attention, but at the end of the each semester I was the one with A+.
          <br /> <br />
          When I started university I originally had the idea of going into
          graphic design, but after building my first website, I was hooked. The
          internet was my outlet. A new way to show and share my passions. Ended
          with master of computer engineering at faculty of engineering at UIT.
          I am so happy that I made that decision.
          <br /> <br />
          Currently I am a freelancer seeking more towards React.js
          applications. I am going to learn Next.js as well. I have started my
          career with HTML, CSS and Javascript and now it ended up React.js and
          TailwindCSS. Short and sweet!
        </div>
        <div>
          As I mentioned before, I am geniunly in love with graphic design. So I
          decided to start learning UI/UX as well.
          <br /> <br />
          And last but not least,I do the work I do because I love it. I like
          the industry. I like the people I meet. I like the coding. I like to
          make the web a better place. Hopefully we cross paths in the real
          world someday and we can make it a better place together.
          <div className="flex justify-center m-0 m-auto items-center mt-20">
            <Vase />
          </div>
        </div>
        <Link to="/about">
          <div className="bg-blob5 bg-contain bg-center bg-no-repeat flex justify-center items-center m-0 m-auto text-sm w-28 p-12 text-gray-300 transform hover:scale-110 hover:text-gray-100 hover:transition duration-500 ease-in-out lg:mb-10 sm:mb-10 md:mb-10 ">
            Back
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Story;
