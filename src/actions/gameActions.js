import axios from "axios";

let uri = "";
if (process.env.NODE_ENV !== "production") {
  uri = "http://localhost:3000";
}

export const createGame = (history) => {
  return (dispatch) => {
    axios
      .post(`${uri}/api/v1/newgame`)
      .then((res) => {
        history.push(`/game/${res.data.gameId}`);
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
      .get(`${uri}/api/v1/joingame${pathname.substring(5)}`)
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
