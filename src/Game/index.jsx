import React from "react";
import Grid from "../Grid/index";

import "./Game.scss";

import gridInfo from "../data/gridinfo.json";

const Game = (props) => {
  return (
    <div className="game">
      <Grid gridInfo={gridInfo} />
    </div>
  );
};

export default Game;
