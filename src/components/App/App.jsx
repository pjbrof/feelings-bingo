import React from "react";
import { connect } from "react-redux";
import { Switch, Route, withRouter } from "react-router-dom";
import Splash from "../Splash/index";
import Game from "../Game/index";

import "./App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="feelings-bingo">
        <header>
          <h1>Feelings Bingo</h1>
        </header>
        <main>
          <Route path="/" exact component={Splash} />
          <Switch>
            <Route path="/game/:gameId" component={Game} />
          </Switch>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    game: store.game,
  };
};

const mapActionToProps = {};

export default withRouter(connect(mapStateToProps, mapActionToProps)(App));
