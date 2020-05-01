import React from "react";
import { connect } from "react-redux";
import Grid from "../Grid/index";
import Copy from "../Copy/index";
import { joinGame } from "../../actions/gameActions";

import "./Game.scss";

class Game extends React.Component {
  constructor(props) {
    super(props);

    if (this.props.game.winMatrix.length <= 0) {
      this.props.joinGame(props.location.pathname);
    }
  }

  render() {
    return (
      <>
        <div className="game">
          <Copy />
          {this.props.game.winMatrix.length > 0 && <Grid />}
        </div>
      </>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    game: store.game,
  };
};

const mapActionToProps = {
  joinGame,
};

export default connect(mapStateToProps, mapActionToProps)(Game);
