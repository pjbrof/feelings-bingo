import React, { useEffect, useContext } from "react";
import { connect } from "react-redux";
import SocketContext from "../../context/socketContext";
import Box from "../Box/index";
import Bingo from "../Bingo/index";
import { isWinner } from "../../utils/globals";
import { updateMatrix } from "../../actions/gameActions";
import { gridTemplateColumns } from "../../utils/globals";

import "./Grid.scss";

const Grid = (props) => {
  const socketCtx = useContext(SocketContext);
  const toggleActive = (e, box) => {
    e.preventDefault();

    const newMatrix = [
      ...props.game.winMatrix.map((value, index) => {
        if (index === box.index) {
          return box.state;
        }
        return value;
      }),
    ];

    if (newMatrix.length > 0) {
      socketCtx.emit("turn", {
        gameId: props.game.gameId,
        winMatrix: newMatrix,
        bingo: isWinner(newMatrix) ? true : false,
      });

      props.updateMatrix({
        gameId: props.game.gameId,
        winMatrix: newMatrix,
        bingo: isWinner(newMatrix) ? true : false,
      });
    }
  };

  useEffect(() => {
    socketCtx.on("updateGame", (data) => {
      props.updateMatrix({
        winMatrix: data.grid,
        bingo: data.bingo,
      });
    });
  });

  return (
    <>
      <div
        className="grid"
        style={{
          gridTemplateColumns: gridTemplateColumns(props.game.winMatrix),
        }}
      >
        {props.game.defaultEmotions.map((emo, index) => {
          return (
            <Box
              key={emo.id}
              index={index}
              emotion={emo.emotion}
              icon={emo.icon}
              isActive={props.game.winMatrix[index]}
              toggleActive={toggleActive}
            />
          );
        })}
      </div>
      {props.game.bingo && <Bingo />}
    </>
  );
};

const mapStateToProps = (store) => {
  return {
    game: store.game,
  };
};

const mapActionToProps = {
  updateMatrix,
};

export default connect(mapStateToProps, mapActionToProps)(Grid);
