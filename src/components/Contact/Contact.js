import React from "react";
import ContactIcon from "../ContactIcon/ContactIcon";
const Contact = () => {
  return (
    <div>
      <div className="grid grid-rows-1 grid-cols-2 text-gray-300 w-7/12 gap-4 m-auto py-24 sm:grid-cols-1 sm:gap-8 md:grid-cols-1 md:gap-4">
        <p className="bg-blob2 bg-contain bg-center bg-no-repeat flex items-center py-20 justify-center text-gray-300 font-bold text-3xl z-20 sm:bg-secondary sm:rounded-2xl sm:p-2 sm:text-sm sm:bg-none sm:shadow-2xl md:shadow-2xl md:bg-secondary md:rounded-2xl md:p-2 md:text-xl md:bg-none lg:text-xl">
          Contact Fojan
        </p>
        <p className="flex justify-center items-center text-left py-4 z-20">
          For questions relating/regarding Frontend Development, cooperation and
          general issues please reach out fojanbabaali@gmail.com
        </p>
        <div className="m-auto">
          <ContactIcon />
        </div>
      </div>
    </div>
  );
};

export default Contact;
