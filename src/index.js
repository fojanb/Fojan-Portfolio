import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";
import reportWebVitals from "./reportWebVitals";
ReactDOM.render(
  <React.StrictMode>
    <div className="bg-gradient-to-bl from-indigo-800 via-indigo-900 to-gray-900 bg-cover bg-center bg-fixed bg-no-repeat relative min-h-screen sm:overflow-x-hidden ">
        <App />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
