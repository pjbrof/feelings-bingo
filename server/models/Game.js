const mongoose = require("mongoose");

const Game = new mongoose.Schema({
  gameId: { type: String, required: true },
  date: { type: Date, required: true, default: Date.now },
  counter: { type: Number, require: true, default: 0 },
  player: { type: String, require: true, default: "" },
});

module.exports = mongoose.model("Game", Game);
