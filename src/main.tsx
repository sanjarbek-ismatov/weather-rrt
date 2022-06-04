import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/main.scss";

ReactDOM.createRoot(document.getElementsByClassName("container")[0]!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
