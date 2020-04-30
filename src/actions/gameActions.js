import axios from "axios";

let uri = "";
if (process.env.NODE_ENV !== "production") {
  uri = "http://localhost:3000";
}

export const createGame = (history) => {
  return (dispatch) => {
    axios
      .post(`${uri}/game/newgame`)
      .then((res) => {
        history.push(`/${res.data.gameId}`);
        dispatch({
          type: "CREATE_GAME_SUCCESS",
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_GAME_FAILED", payload: err });
      });
  };
};

export const joinGame = (pathname) => {
  return (dispatch) => {
    axios
      .get(`${uri}/game/joingame${pathname}`)
      .then((res) => {
        dispatch({
          type: "JOIN_GAME_SUCCESS",
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({ type: "JOIN_GAME_FAILED", payload: err });
      });
  };
};

export const updateMatrix = (state) => {
  return {
    type: "UPDATE_MATRIX",
    payload: state,
  };
};
