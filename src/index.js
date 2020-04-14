import React from "react";
import ReactDOM from "react-dom";

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
} from "@fortawesome/free-regular-svg-icons";

library.add(
  faGrinBeam,
  faAngry,
  faMeh,
  faFlushed,
  faFrownOpen,
  faGrimace,
  faSurprise,
  faSadTear
);

import App from "./App/App";

ReactDOM.render(<App />, document.getElementById("app"));
