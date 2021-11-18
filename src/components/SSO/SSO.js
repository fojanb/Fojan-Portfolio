import React from "react";
import GoogleLogin from "react-google-login";

const responseGoogle = (response) => {
  console.log(response);
  console.log(response.profileObj);
};
const SSO = () => {
  return (
    <div className="grid grid-rows-3 grid-cols-1 w-60 justify-center gap-1 items-center text-center m-auto m-0 mt-32 relative z-50 lg:mt-24">
      <p className="bg-blob1 bg-contain bg-center bg-no-repeat flex text-gray-300 font-bold text-xl text-center justify-center items-center p-12 text-shadow-lg lg:text-lg sm:bg-none sm:bg-secondary sm:w-60 sm:m-auto sm:rounded-2xl sm:mt-8 sm:p-2 sm:text-sm sm:shadow-2xl md:shadow-2xl md:bg-secondary md:w-60 md:m-auto md:mt-24 md:rounded-2xl md:p-2 md:text-xl md:bg-none lg:text-xl">Let's Login!</p>
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
