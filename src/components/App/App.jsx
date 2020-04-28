import React from "react";
import { connect } from "react-redux";
import { Switch, Route, withRouter } from "react-router-dom";
import Splash from "../Splash/index";
import Game from "../Game/index";
import { joinGame } from "../../actions/gameActions";

import "./App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      path: window.location.pathname,
    };
  }

  componentWillMount() {
    const { path } = this.state;
    if (path.length === 10) {
      this.props.joinGame(path);
    }
  }

  render() {
    return (
      <div className="feelings-bingo">
        <h1>Feelings Bingo</h1>
        <Route path="/" exact component={Splash} />
        <Switch>
          <Route path="/:gameId" component={Game} />
        </Switch>
      </div>
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

export default withRouter(connect(mapStateToProps, mapActionToProps)(App));
