import React from "react";

const Appointment = () => {
  return (
    <div>
      <hr className="w-5/6 m-auto opacity-40"/>
      <div className="grid grid-rows-1 grid-cols-2 text-gray-100 w-5/6 m-auto py-8 sm:grid-cols-1 sm:gap-8 md:grid-cols-1 md:gap-8 lg:gap-12">
      <p className="hidden text-center items-center justify-center text-gray-100 font-bold text-3xl sm:flex sm:text-center sm:bg-red-500 sm:bg-opacity-20 sm:rounded-2xl sm:p-2 sm:text-sm sm:bg-none md:flex md:bg-red-500 md:bg-opacity-20 md:rounded-2xl md:p-2 md:text-xl md:bg-none md:text-center ">Book Your Appointment</p>
        <form action="" method="POST" className="grid grid-rows-6 grid-cols-1 gap-4 m-auto">
          <input type="text" className="flex pl-2 rounded" placeholder="First Name" name="fname" />
          <input type="text" className="flex pl-2 rounded" placeholder="Last Name" name="lname" />
          <input type="email" className="flex pl-2 rounded" placeholder="Email" name="email"/>
          <input type="password" className="flex pl-2 rounded" placeholder="Password" name="password"/>
          <textarea className="flex w-96 pl-4 pt-2 rounded" placeholder="Message" />
          <button type="submit" className="flex bg-ruby text-gray-100 text-center items-center justify-center font-bold border text-md w-20 h-10 m-auto rounded">Send</button>
        </form>
        <p className="bg-blob1 bg-contain bg-center bg-no-repeat flex text-center items-center justify-center text-gray-100 font-bold text-3xl sm:hidden galaxy:hidden md:hidden">Book Your Appointment</p>
      </div>
    </div>
  );
};

export default Appointment;

