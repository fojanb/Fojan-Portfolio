import React from "react";
import Wall from "../Wall/Wall";

const Join = () => {
  return (
    <div className="grid grid-cols-3 w-1/2 m-0 m-auto">
      <div className="flex justify-center items-center m-0 m-auto">
        <Wall />
      </div>
      <form
        action=""
        className="grid grid-cols-1 m-auto w-80 mt-10 mb-20 gap-6 rounded p-8 relative z-50 lg:mt-8 sm:gap-4 md:gap-4 sm:mt-10 sm:mb-10"
      >
        <input
          type="text"
          placeholder="First Name"
          name="fname"
          id="fname"
          className="h-10 p-4 border rounded m-auto bg-purple-300 bg-opacity-20 shadow-2xl border-none hover:bg-opacity-50"
        />
        <input
          type="text"
          placeholder="Last Name"
          name="lname"
          id="fname"
          className="h-10 p-4 border rounded m-auto bg-purple-300 bg-opacity-20 shadow-2xl border-none hover:bg-opacity-50"
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          id="email"
          className="h-10 p-4 border rounded m-auto bg-purple-300 bg-opacity-20 shadow-2xl border-none hover:bg-opacity-50"
        />
        <input
          type="number"
          placeholder="Phone Number"
          name="phone"
          id="phone"
          className="h-10 p-4 border rounded m-auto bg-purple-300 bg-opacity-20 shadow-2xl border-none hover:bg-opacity-50"
        />
        <input
          type="text"
          placeholder="Postal Code"
          name="pcode"
          id="pcode"
          className="h-10 p-4 border rounded m-auto bg-purple-300 bg-opacity-20 shadow-2xl border-none hover:bg-opacity-50"
        />
        <button
          type="submit"
          className="bg-secondary shadow-xl rounded m-auto text-lg px-8 py-2 text-gray-300 transform hover:scale-110 hover:transition duration-500 ease-in-out sm:px-4 sm:text-sm sm:w-20 sm:h-10 sm:mb-5"
        >
          Submit
        </button>
      </form>
      <div className="flex justify-center items-center m-0 m-auto mb-10">
        <Wall />
      </div>
    </div>
  );
};

export default Join;
