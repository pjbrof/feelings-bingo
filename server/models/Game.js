const mongoose = require("mongoose");

const Game = new mongoose.Schema({
  gameId: { type: String, required: true },
  winMatrix: {
    type: Array,
    required: true,
    default: [0, 0, 0, 0, 0, 0, 0, 0, 0],
  },
  date: { type: Date, required: true, default: Date.now },
  players: { type: Array, require: true, default: [] },
  bingo: { type: Boolean, require: true, default: false },
});

module.exports = mongoose.model("Game", Game);
