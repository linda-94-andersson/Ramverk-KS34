import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./redux/store";
import Context from "./redux/context/Context";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/index.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Context>
        <App />
      </Context>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
