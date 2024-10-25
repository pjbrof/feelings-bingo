import { createSlice } from "@reduxjs/toolkit";
import gridInfo from "../sources/gridinfo.json";

export const gameSlice = createSlice({
  name: "game",
  initialState: {
    gameId: "",
    winMatrix: [],
    bingo: false,
    defaultEmotions: gridInfo,
    fetching: false,
    error: null,
  },
  reducers: {
    createGame: (state, action) => {
      state.gameId = action.payload.gameId;
      state.winMatrix = action.payload.winMatrix;
    },
  },
});

// Action creators are generated for each case reducer function
export const { createGame } = gameSlice.actions;

export default gameSlice.reducer;

/* case "CREATE_GAME_SUCCESS": {
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
} */
