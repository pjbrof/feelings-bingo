import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./store";

import SocketContext from "./context/socketContext";
import io from "socket.io-client";

const socket = io();

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

library.add(
  faGrinBeam,
  faAngry,
  faMeh,
  faFlushed,
  faFrownOpen,
  faGrimace,
  faSurprise,
  faSadTear,
  faCopy
);

import App from "./components/App/App";

ReactDOM.render(
  <BrowserRouter>
    <SocketContext.Provider value={socket}>
      <Provider store={store}>
        <App />
      </Provider>
    </SocketContext.Provider>
  </BrowserRouter>,
  document.getElementById("app")
);
