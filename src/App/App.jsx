import React from "react";
import Grid from "../Grid/index";

import "./App.scss";

const gridInfo = [
  {
    id: 1,
    emotion: "Happy",
  },
  {
    id: 2,
    emotion: "Sad",
  },
  {
    id: 3,
    emotion: "Mad",
  },
  {
    id: 4,
    emotion: "Jealous",
  },
  {
    id: 5,
    emotion: "Free Space",
  },
  {
    id: 6,
    emotion: "Surprised",
  },
  {
    id: 7,
    emotion: "Ashamed",
  },
  {
    id: 8,
    emotion: "Worried",
  },
  {
    id: 9,
    emotion: "Scared",
  },
];

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
