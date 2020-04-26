const Game = require("../models/Game");

/* const io = req.app.get('socketio');
io.emit('hi!'); */

const getGameId = async (id) => {
  try {
    const gamer = await Game.findOne({ gameId: id });
    if (gamer == null) {
      return "no game found";
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
    console.log("game saved");
    return saveGame;
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  getGameId,
  updateGame,
};

// export const updateGame = async () => {
//   try {
//     const updatedGame = await getGameId();
//     gamer.save()
//   } catch (err) {}
// };
