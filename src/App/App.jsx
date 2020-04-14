import React from "react";
import Grid from "../Grid/index";

import "./App.scss";

import gridInfo from "../data/gridinfo.json";

class App extends React.Component {
  render() {
    return (
      <>
        <h1>Feelings Bingo</h1>
        <Grid gridInfo={gridInfo} />
      </>
    );
  }
}

export default App;
