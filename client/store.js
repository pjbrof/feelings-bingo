import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./reducers/gameReducer";
import { gameApi } from "./services/game";

export default configureStore({
  reducer: {
    game: gameReducer,
    [gameApi.reducerPath]: gameApi.reducer,
  },
});
