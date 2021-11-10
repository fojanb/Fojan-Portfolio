import React from "react";

const Contact = () => {
  return (
    <div>
      <hr className="w-5/6 m-auto opacity-40" />
      <div className="grid grid-rows-1 grid-cols-2 text-gray-100 w-5/6 m-auto py-8 sm:grid-cols-1 sm:gap-8 md:grid-cols-1 md:gap-8 lg:gap-12">
        <p className="flex items-center justify-center text-gray-100 font-bold text-3xl sm:bg-red-500 sm:bg-opacity-20 sm:rounded-2xl sm:p-2 sm:text-sm sm:bg-none md:bg-red-500 md:bg-opacity-20 md:rounded-2xl md:p-2 md:text-xl">
          Contact Fojan
        </p>
        <p className="flex justify-center items-center text-left">
          For questions relating/regarding pre-sale, cooperation and general
          issues please reach out info@fojanbabaali.ca
        </p>
      </div>
    </div>
  );
};

export default Contact;
