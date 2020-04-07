import React from "react";

import "./Box.scss";

const Box = (props) => {
  return (
    <a href="#" className="box">
      {props.emotion}
    </a>
  );
};

export default Box;
