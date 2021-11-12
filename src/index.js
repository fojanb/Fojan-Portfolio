import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <div className="bg-hero bg-cover bg-center bg-fixed bg-no-repeat galaxy:bg-sm sm:bg-sm sm:overflow-x-hidden ">
      <Router>
        <App />
      </Router>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
