import React from "react";
import Grid from "../Grid/index";
import Copy from "../Copy/index";

import "./Game.scss";

const Game = () => {
  return (
    <>
      <div className="game">
        <Copy />
        <Grid />
      </div>
    </>
  );
};

export default Game;
