import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";
import reportWebVitals from "./reportWebVitals";
ReactDOM.render(
  <React.StrictMode>
    <div className="bg-black grid-cols-2	grid-rows-2	">
    {/* min-h-screen bg-cover bg-center bg-fixed bg-no-repeat */}
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
