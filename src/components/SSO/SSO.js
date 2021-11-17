import React from "react";
import GoogleLogin from "react-google-login";

const responseGoogle = (response) => {
  console.log(response);
  console.log(response.profileObj);
};
const SSO = () => {
  return (
    <div className="grid grid-rows-2 grid-cols-2 w-2/6 justify-center gap-28 items-center text-center m-auto m-0 mt-36 relative z-50">
      <p className="bg-blob1 bg-contain bg-center bg-no-repeat flex text-gray-300 font-bold text-xl text-center justify-center items-center p-12">Login with Google</p>
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
