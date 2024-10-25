import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./store";
import App from "./components/App/App";
import SocketContext from "./context/socketContext";
const { io } = require("socket.io-client");

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGrinBeam,
  faAngry,
  faMeh,
  faFlushed,
  faFrownOpen,
  faGrimace,
  faSurprise,
  faSadTear,
  faCopy,
} from "@fortawesome/free-regular-svg-icons";

import { faSmileBeam } from "@fortawesome/free-solid-svg-icons";

library.add(
  faGrinBeam,
  faAngry,
  faMeh,
  faFlushed,
  faFrownOpen,
  faGrimace,
  faSurprise,
  faSmileBeam,
  faSadTear,
  faCopy
);

let server = "";
if (process.env.NODE_ENV !== "production") {
  server = "http://localhost:3002";
}

const socket = io(server);

const root = createRoot(document.getElementById("app"));

root.render(
  <BrowserRouter>
    <SocketContext.Provider value={socket}>
      <Provider store={store}>
        <App />
      </Provider>
    </SocketContext.Provider>
  </BrowserRouter>
);
