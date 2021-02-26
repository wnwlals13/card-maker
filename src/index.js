import React from "react";
import ReactDOM from "react-dom";
import "./index.module.css";
import App from "./app";
import Authentication from "./service/auth_service";

const authService = new Authentication();

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} />
  </React.StrictMode>,
  document.getElementById("root")
);
