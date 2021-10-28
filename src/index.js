import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";
import reportWebVitals from "./reportWebVitals";
ReactDOM.render(
  <React.StrictMode>
    <div className="bg-hero min-h-screen relative bg-cover bg-fixed bg-no-repeat -z-1 xl:h-auto xl:w-full">
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
