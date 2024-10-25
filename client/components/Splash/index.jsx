import React from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCreateNewGameMutation } from "../../services/game";
// import { createGame } from "../../actions/gameActions";

import "./Splash.scss";

const Splash = ({ history }) => {
  const dispatch = useDispatch();
  const [] = useCreateNewGameMutation();

  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <div className="splash">
      <div className="splash-icons">
        <i>
          <FontAwesomeIcon
            icon={["fas", "smile-beam"]}
            style={{ color: "#ffeb01" }}
          />
        </i>
      </div>
      <button onClick={(e) => handleClick(e)}>Start New Game</button>
    </div>
  );
};

export default Splash;
