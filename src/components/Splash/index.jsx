import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createGame } from "../../actions/gameActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Splash.scss";

const Splash = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    props.createGame(props.history);
  };

  return (
    <div className="splash">
      <div className="splash-icons">
        <i>
          <FontAwesomeIcon icon={["far", "surprise"]} />
        </i>
        <i>
          <FontAwesomeIcon icon={["far", "grin-beam"]} />
        </i>
        <i>
          <FontAwesomeIcon icon={["far", "grimace"]} />
        </i>
      </div>
      <button onClick={handleClick}>Start New Game</button>
    </div>
  );
};

const mapStateToProps = (store) => {
  return {
    game: store.game,
  };
};

const mapActionToProps = {
  createGame,
};

export default withRouter(connect(mapStateToProps, mapActionToProps)(Splash));
