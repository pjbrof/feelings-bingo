const express = require("express");
const router = express.Router();
const shortid = require("shortid");
const Game = require("../models/Game");

const getGameId = async (req, res, next) => {
  try {
    const gamer = await Game.findOne({ gameId: req.params.gameId });
    if (gamer == null) {
      return res.status(404).json({ message: "No game found" });
    }
    res.gamer = gamer;
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  next();
};

router.get("/games", async (req, res) => {
  try {
    const games = await Game.find();
    res.status(200).json(games);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/joingame/:gameId", getGameId, async (req, res) => {
  const socket = req.app.get("socketio");

  console.log("User joined a game", req.params.gameId);
  socket.join(req.params.gameId);
  socket.to(req.params.gameId).emit("join-game", req.params.gameId);

  res.json(res.gamer);
});

router.post("/newgame", async (req, res) => {
  const socket = req.app.get("socketio");

  const UUID = shortid.generate();
  const gameInfo = new Game({
    gameId: UUID,
  });

  try {
    console.log("User created a game");
    socket.join(UUID);
    socket.to(UUID).emit("new-game", UUID);

    const newGame = await gameInfo.save();
    res.status(201).json(newGame);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete("/endgame/:gameId", getGameId, async (req, res) => {
  try {
    const gameToEnd = await Game.deleteOne({ gameId: req.params.gameId });
    res.status(200).json(gameToEnd);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete("/purge", async (req, res) => {
  try {
    const purge = await Game.deleteMany({});
    res.status(200).json(purge);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
