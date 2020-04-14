import React from "react";
import Box from "../Box/index";

import "./Grid.scss";

const Grid = (props) => {
  return (
    <div className="grid" style={{ gridTemplateColumns: "auto auto auto" }}>
      {props.gridInfo.map((emo) => {
        return <Box key={emo.id} emotion={emo.emotion} icon={emo.icon} />;
      })}
    </div>
  );
};

export default Grid;
