import React from "react";

import "./Bingo.scss";

const Bingo = () => {
  return (
    <div className="bingo">
      <h1>BINGO!</h1>
      <div className="pyro">
        <div className="before"></div>
        <div className="after"></div>
      </div>
    </div>
  );
};

export default Bingo;
