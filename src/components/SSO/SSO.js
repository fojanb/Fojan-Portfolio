import React from "react";
import GoogleLogin from "react-google-login";

const responseGoogle = (response) => {
  console.log(response);
  console.log(response.profileObj);
};
const SSO = () => {
  return (
    <div className="grid grid-cols-1 w-60 justify-center items-center text-center m-auto m-0 mt-20 mb-48 relative z-50">
      <p className="bg-blob2 bg-contain bg-center bg-no-repeat flex text-gray-300 font-bold text-xl text-center justify-center items-center m-0 m-auto p-12 lg:text-lg sm:bg-none sm:bg-secondary sm:w-60 sm:m-auto sm:rounded-2xl sm:mt-8 sm:p-2 sm:text-sm md:bg-secondary md:w-60 md:m-auto md:mt-8 md:rounded-2xl md:p-2 md:text-xl md:bg-none lg:text-xl">Email Me!</p>
      <strong className="text-greeny hover:text-lightGreeny p-8 transform hover:scale-100 hover:transition duration-500 ease-in-out">fojanbabaali@gmail.com</strong>
      <GoogleLogin
        clientId="608613478109-td6sqllrd930dpeoigpt4ei16taf0dbe.apps.googleusercontent.com"
        buttonText="Sign in with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy="single_host_origin"
      />
    </div>
  );
};

export default SSO;
