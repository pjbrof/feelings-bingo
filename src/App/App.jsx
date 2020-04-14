import React from "react";
import Splash from "../Splash/index";
// import Game from "../Game/index";

import "./App.scss";

class App extends React.Component {
  render() {
    return (
      <div className="feelings-bingo">
        <h1>Feelings Bingo</h1>
        <Splash />
      </div>
    );
  }
}

export default App;
