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

const updateGame = async (data) => {
  const gamer = await getGameId(data.gameId);
  gamer.winMatrix = data.winMatrix;
  try {
    const saveGame = await gamer.save();
    return saveGame;
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  getGameId,
  updateGame,
};
