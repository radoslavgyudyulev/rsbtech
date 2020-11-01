import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";

import rootReducer from "./_reducers/rootReducer";

const store = createStore(rootReducer);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
