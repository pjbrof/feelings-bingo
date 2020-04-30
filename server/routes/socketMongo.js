const Game = require("../models/Game");

const getGameId = async (id) => {
  try {
    const gamer = await Game.findOne({ gameId: id });
    if (gamer == null) {
      return "No game found";
    }
    return gamer;
  } catch (err) {
    throw new Error(err);
  }
};

const joinGame = async (gameId) => {
  const gamer = await getGameId(gameId);
  try {
    const joinGame = await gamer.save();
    return joinGame;
  } catch (err) {
    throw new Error(err);
  }
};

const updateGame = async (data) => {
  const gamer = await getGameId(data.gameId);
  gamer.winMatrix = data.winMatrix;
  gamer.bingo = data.bingo;
  try {
    await gamer.save();
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  getGameId,
  joinGame,
  updateGame,
};
