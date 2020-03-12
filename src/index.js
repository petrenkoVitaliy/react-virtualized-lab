import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { Routes } from "./routes";
import { Navigation } from "./common/Navigation";

ReactDOM.render(
  <BrowserRouter>
    <Navigation />
    <Routes />
  </BrowserRouter>,
  document.getElementById("root")
);
