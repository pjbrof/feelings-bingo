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
          <FontAwesomeIcon
            icon={["fas", "smile-beam"]}
            style={{ color: "#ffeb01" }}
          />
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
