import React from "react";
import ReactDOM from "react-dom";
import "./css/main.scss";

import App from "./components/App";
import { createStores } from "./stores/createStores";
import { Provider } from "mobx-react";

const stores = createStores();

ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.getElementById("root")
);
