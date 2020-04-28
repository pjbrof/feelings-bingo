import gridInfo from "../sources/gridinfo.json";

export default function reducer(
  state = {
    gameId: "",
    winMatrix: [],
    bingo: false,
    defaultEmotions: gridInfo,
    fetching: false,
    error: null,
  },
  action
) {
  switch (action.type) {
    case "CREATE_GAME_SUCCESS": {
      return {
        ...state,
        gameId: action.payload.gameId,
        winMatrix: action.payload.winMatrix,
      };
    }
    case "CREATE_GAME_FAILED": {
      return { ...state, error: action.payload };
    }
    case "JOIN_GAME_SUCCESS": {
      return {
        ...state,
        gameId: action.payload.gameId,
        winMatrix: action.payload.winMatrix,
        bingo: action.payload.bingo,
      };
    }
    case "JOIN_GAME_FAILED": {
      return { ...state, error: action.payload };
    }
    case "UPDATE_MATRIX": {
      return {
        ...state,
        winMatrix: action.payload.winMatrix,
        bingo: action.payload.bingo,
      };
    }
    default: {
      return { ...state };
    }
  }
}
