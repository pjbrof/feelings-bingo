const express = require("express");
const router = express.Router();
const shortid = require("shortid");
const Game = require("../models/Game");

router.get("/", async (req, res) => {
  try {
    const games = await Game.find();
    res.status(200).json(games);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/:gameId", getGameId, async (req, res) => {
  res.json(res.gamer);
});

router.post("/newgame", async (req, res) => {
  const gameInfo = new Game({
    gameId: shortid.generate(),
  });

  try {
    const newGame = await gameInfo.save();
    res.status(201).json(newGame);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.patch("/:gameId", getGameId, async (req, res) => {
  res.gamer.counter = req.body.counter;
  res.gamer.player = req.body.player;
  try {
    const gameUpdated = await res.gamer.save();
    res.json(gameUpdated);
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

async function getGameId(req, res, next) {
  let gamer;
  try {
    gamer = await Game.findOne({ gameId: req.params.gameId });
    if (gamer == null) {
      return res.status(404).json({ message: "No game found" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.gamer = gamer;
  next();
}

module.exports = router;
