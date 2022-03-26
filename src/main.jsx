import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./style/index.css";
import App from "./App";
import store from "./redux/store";
import "bootstrap/dist/css/bootstrap.min.css";
import Context from "./context/Context";

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
