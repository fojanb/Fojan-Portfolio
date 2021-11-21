import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";
import reportWebVitals from "./reportWebVitals";
ReactDOM.render(
  <React.StrictMode>
    <div className="bg-dark bg-cover overflow-x-hidden bg-center bg-fixed bg-no-repeat relative min-h-screen sm:overflow-x-hidden ">
        <App />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
