import React from "react";
import { connect } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Splash from "../Splash/index";
import Game from "../Game/index";

import "./App.scss";

const App = () => (
  <div className="feelings-bingo">
    <header>
      <h1>Feelings Bingo</h1>
    </header>
    <main>
      <Routes>
        <Route path="/" exact element={<Splash />} />
        <Route path="/game/:gameId" element={<Game />} />
      </Routes>
    </main>
  </div>
);

const mapStateToProps = (store) => {
  return {
    game: store.game,
  };
};

const mapActionToProps = {};

export default connect(mapStateToProps, mapActionToProps)(App);
