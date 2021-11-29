import React from "react";
import WorksIcon from "../WorksIcon/WorksIcon";
const Works = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-1 w-screen pb-36 m-0 m-auto">
      <p className="bg-blob2 bg-contain bg-center bg-no-repeat flex text-left items-center justify-center text-gray-300 font-bold text-3xl py-14 mt-10 relative z-40 mb-8 sm:bg-secondary sm:w-60 sm:m-auto sm:rounded-2xl sm:mt-8 sm:p-2 sm:text-sm sm:bg-none sm:shadow-2xl md:shadow-2xl md:bg-secondary md:w-60 md:m-auto md:mt-24 md:rounded-2xl md:p-2 md:text-xl md:bg-none lg:text-xl">
        <span className="sm:hidden md:hidden">
          <WorksIcon />
        </span>
        <span>Works</span>
      </p>
      <p className="flex flex-col text-left items-center justify-center text-lg m-auto text-gray-300 px-14 py-8 relative z-40">
        <div>Here you can see some of my personal frontend projects.</div>
        <div>
          I have mostly used React and public API on them. Make sure to checkout{" "}
          <a href="https://github.com/fojanb" target="_blank">
            <span className="font-bold text-greeny hover:text-lightGreeny transform hover:scale-100 hover:transition duration-500 ease-in-out">
              &nbsp;my GitHub
            </span>
          </a>
        </div>
      </p>
      <div className="grid grid-rows-1 grid-cols-1 gap-8 text-gray-100 w-1/2  m-auto py-8 lg:w-3/4 md:grid-cols-1 md:w-1/2 galaxy:w-3/4 sm:grid-cols-1 sm:gap-4 ">
        <div className="flex items-center justify-center ">
          <div className="bg-light w-max h-auto text-left p-4 rounded-xl shadow-2xl">
            <header className="bg-blob6 bg-contain bg-center bg-no-repeat flex items-left w-64 font-bold text-lg p-8 text-gray-300">
              My Personal Portfolio
            </header>
            <article className="pt-4 text-left text-gray-300">
              <strong>
                This is one those projects that I geniunly made it with true
                love.
              </strong>
              &nbsp;I have designed each pieces in figma, from icons, avatar and
              images as well as creating a unique and eye-pleasing color
              palette. <br />
              <br />
              The technologies I have used are React and TailwindCSS. Let me
              tell ya'll that using Tailwind is a pure joy! It made the whole
              styling proccess so easy, fun and straight forward. Yeah... I can
              not get enough of that. Make sure to try it, you won't regret it.{" "}
              <br />
              <br />
              You can easily navigate through my portfolio like a single page
              application without to much of loading page and sending request to
              the main server, and it means that I have used react-router-dom in
              all over my portfolio.
              <div className="flex items-left w-60 text-sm p-8 text-gray-300">
                <span className="font-bold text-greeny hover:text-lightGreeny transform hover:scale-100 hover:transition duration-500 ease-in-out">
                  <a href="" target="_blank">
                    GitHub Repository&nbsp;<span>→</span>
                  </a>
                </span>
              </div>
            </article>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="bg-light w-full h-auto text-left p-4 rounded-xl shadow-2xl">
            <header className="bg-blob6 bg-contain bg-center bg-no-repeat flex items-left w-60 font-bold text-lg text-gray-300 p-8">
              Food Reciepe App
            </header>
            <article className="pt-4 text-left text-gray-300">
              Me, as a developer barely find a free time to cook. I know that
              you maybe at the same boat as me.Anyway, it does not mean that I
              can not make food applications! Honestly I am a food lover! so I
              thought that by making a food reciepe application I can show my
              passion and love about food in a new way not only by eating them.
              <br />
              <br />
              So... here is what I made by using a public food reciepe API. What
              technology have I used ? As usual the answer is React! How did I
              use the API? fetch() function and that's it. So easy, right? Make
              sure to chaeck out my GitHub account as well. All of my code
              projects lives there. And tha last but not least, How did I style
              the food app? Simply used CSS.
              <div className="flex items-left w-60 text-sm p-8 text-gray-300">
                <span className="font-bold text-greeny hover:text-lightGreeny transform hover:scale-100 hover:transition duration-500 ease-in-out">
                  <a
                    href="https://github.com/fojanb/Food-Recipe-App"
                    target="_blank"
                  >
                    GitHub Repository&nbsp;<span>→</span>
                  </a>
                </span>
              </div>
            </article>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="bg-light w-full h-auto text-left p-4 rounded-xl shadow-2xl">
            <header className="bg-blob6 bg-contain bg-center bg-no-repeat flex items-left w-52 font-bold text-lg text-gray-300 p-8">
              Covid-Widgets
            </header>
            <article className="pt-4 text-left text-gray-300">
              You can not live in 2020 and don't remember Covid-19 pandemeic! It
              is almost 2022 and Yeah the whole world are still dealing with it!
              <br />
              <br />
              Since I live in Canada (Eh), I decided to follow up Covid-19 data
              diagram every single day to see if there is a pick or not and in
              general be updated with the all sort of rates (i.e. death rate). I
              found the Canada-Covid-API and start to making a simple but enough
              widget by fetchig the API.
              <div className="flex items-left w-60 text-sm p-8 text-gray-300">
                <span className="font-bold text-greeny hover:text-lightGreeny transform hover:scale-100 hover:transition duration-500 ease-in-out">
                  <a
                    href="https://github.com/fojanb/coronavirus-info-widgets"
                    target="_blank"
                  >
                    GitHub Repository&nbsp;<span>→</span>
                  </a>
                </span>
              </div>
            </article>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="bg-light w-full h-auto text-left p-4 rounded-xl shadow-2xl">
            <header className="bg-blob6 bg-contain bg-center bg-no-repeat flex items-left w-52 font-bold text-lg text-gray-300 p-8">
              Weather-App
            </header>
            <article className="pt-4 text-left text-gray-300">
              You can not live in 2020 and don't remember Covid-19 pandemeic! It
              is almost 2022 and Yeah the whole world are still dealing with it!
              <br />
              <br />
              Since I live in Canada (Eh), I decided to follow up Covid-19 data
              diagram every single day to see if there is a pick or not and in
              general be updated with the all sort of rates (i.e. death rate). I
              found the Canada-Covid-API and start to making a simple but enough
              widget by fetchig the API.
              <div className="flex items-left w-60 text-sm p-8 text-gray-300">
                <span className="font-bold text-greeny hover:text-lightGreeny transform hover:scale-100 hover:transition duration-500 ease-in-out">
                  <a
                    href="https://github.com/fojanb/weather-app"
                    target="_blank"
                  >
                    GitHub Repository&nbsp;<span>→</span>
                  </a>
                </span>
              </div>
            </article>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="bg-light w-full h-auto text-left p-4 rounded-xl shadow-2xl">
            <header className="bg-blob6 bg-contain bg-center bg-no-repeat flex items-left w-52 font-bold text-lg text-gray-300 p-8">
              Face-Detection
            </header>
            <article className="pt-4 text-left text-gray-300">
              You can not live in 2020 and don't remember Covid-19 pandemeic! It
              is almost 2022 and Yeah the whole world are still dealing with it!
              <br />
              <br />
              Since I live in Canada (Eh), I decided to follow up Covid-19 data
              diagram every single day to see if there is a pick or not and in
              general be updated with the all sort of rates (i.e. death rate). I
              found the Canada-Covid-API and start to making a simple but enough
              widget by fetchig the API.
              <div className="flex items-left w-60 text-sm p-8 text-gray-300">
                <span className="font-bold text-greeny hover:text-lightGreeny transform hover:scale-100 hover:transition duration-500 ease-in-out">
                  <a
                    href="https://github.com/fojanb/face-detection"
                    target="_blank"
                  >
                    GitHub Repository&nbsp;<span>→</span>
                  </a>
                </span>
              </div>
            </article>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="bg-light w-full h-auto text-left p-4 rounded-xl shadow-2xl">
            <header className="bg-blob6 bg-contain bg-center bg-no-repeat flex items-left w-52 font-bold text-lg text-gray-300 p-8">
              Paint-App{" "}
            </header>
            <article className="pt-4 text-left text-gray-300">
              You can not live in 2020 and don't remember Covid-19 pandemeic! It
              is almost 2022 and Yeah the whole world are still dealing with it!
              <br />
              <br />
              Since I live in Canada (Eh), I decided to follow up Covid-19 data
              diagram every single day to see if there is a pick or not and in
              general be updated with the all sort of rates (i.e. death rate). I
              found the Canada-Covid-API and start to making a simple but enough
              widget by fetchig the API.
              <div className="flex items-left w-60 text-sm p-8 text-gray-300">
                <span className="font-bold text-greeny hover:text-lightGreeny transform hover:scale-100 hover:transition duration-500 ease-in-out">
                  <a href="https://github.com/fojanb/paint-app" target="_blank">
                    GitHub Repository&nbsp;<span>→</span>
                  </a>
                </span>
              </div>
            </article>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="bg-light w-full h-auto text-left p-4 rounded-xl shadow-2xl">
            <header className="bg-blob6 bg-contain bg-center bg-no-repeat flex items-left w-52 font-bold text-lg text-gray-300 p-8">
            Jane-Doe-Portfolio
            </header>
            <article className="pt-4 text-left text-gray-300">
              You can not live in 2020 and don't remember Covid-19 pandemeic! It
              is almost 2022 and Yeah the whole world are still dealing with it!
              <br />
              <br />
              Since I live in Canada (Eh), I decided to follow up Covid-19 data
              diagram every single day to see if there is a pick or not and in
              general be updated with the all sort of rates (i.e. death rate). I
              found the Canada-Covid-API and start to making a simple but enough
              widget by fetchig the API.
              <div className="flex items-left w-60 text-sm p-8 text-gray-300">
                <span className="font-bold text-greeny hover:text-lightGreeny transform hover:scale-100 hover:transition duration-500 ease-in-out">
                  <a href="https://github.com/fojanb/Jane-Doe-Portfolio" target="_blank">
                    GitHub Repository&nbsp;<span>→</span>
                  </a>
                </span>
              </div>
            </article>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="bg-light w-full h-auto text-left p-4 rounded-xl shadow-2xl">
            <header className="bg-blob6 bg-contain bg-center bg-no-repeat flex items-left w-52 font-bold text-lg text-gray-300 p-8">
            A Webpage
            </header>
            <article className="pt-4 text-left text-gray-300">
              You can not live in 2020 and don't remember Covid-19 pandemeic! It
              is almost 2022 and Yeah the whole world are still dealing with it!
              <br />
              <br />
              Since I live in Canada (Eh), I decided to follow up Covid-19 data
              diagram every single day to see if there is a pick or not and in
              general be updated with the all sort of rates (i.e. death rate). I
              found the Canada-Covid-API and start to making a simple but enough
              widget by fetchig the API.
              <div className="flex items-left w-60 text-sm p-8 text-gray-300">
                <span className="font-bold text-greeny hover:text-lightGreeny transform hover:scale-100 hover:transition duration-500 ease-in-out">
                  <a href="https://github.com/fojanb/one-page-website" target="_blank">
                    GitHub Repository&nbsp;<span>→</span>
                  </a>
                </span>
              </div>
            </article>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="bg-light w-full h-auto text-left p-4 rounded-xl shadow-2xl">
            <header className="bg-blob6 bg-contain bg-center bg-no-repeat flex items-left w-52 font-bold text-lg text-gray-300 p-8">
            Pixel-Art-Maker
            </header>
            <article className="pt-4 text-left text-gray-300">
              You can not live in 2020 and don't remember Covid-19 pandemeic! It
              is almost 2022 and Yeah the whole world are still dealing with it!
              <br />
              <br />
              Since I live in Canada (Eh), I decided to follow up Covid-19 data
              diagram every single day to see if there is a pick or not and in
              general be updated with the all sort of rates (i.e. death rate). I
              found the Canada-Covid-API and start to making a simple but enough
              widget by fetchig the API.
              <div className="flex items-left w-60 text-sm p-8 text-gray-300">
                <span className="font-bold text-greeny hover:text-lightGreeny transform hover:scale-100 hover:transition duration-500 ease-in-out">
                  <a href="https://github.com/fojanb/pixel-art-maker" target="_blank">
                    GitHub Repository&nbsp;<span>→</span>
                  </a>
                </span>
              </div>
            </article>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="bg-light w-full h-auto text-left p-4 rounded-xl shadow-2xl">
            <header className="bg-blob6 bg-contain bg-center bg-no-repeat flex items-left w-52 font-bold text-lg text-gray-300 p-8">
            Candy-Crush (My childhood crush)
            </header>
            <article className="pt-4 text-left text-gray-300">
              You can not live in 2020 and don't remember Covid-19 pandemeic! It
              is almost 2022 and Yeah the whole world are still dealing with it!
              <br />
              <br />
              Since I live in Canada (Eh), I decided to follow up Covid-19 data
              diagram every single day to see if there is a pick or not and in
              general be updated with the all sort of rates (i.e. death rate). I
              found the Canada-Covid-API and start to making a simple but enough
              widget by fetchig the API.
              <div className="flex items-left w-60 text-sm p-8 text-gray-300">
                <span className="font-bold text-greeny hover:text-lightGreeny transform hover:scale-100 hover:transition duration-500 ease-in-out">
                  <a href="https://github.com/fojanb/Candy-Crush" target="_blank">
                    GitHub Repository&nbsp;<span>→</span>
                  </a>
                </span>
              </div>
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
