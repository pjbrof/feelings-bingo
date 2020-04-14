import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Box.scss";

const Box = (props) => {
  return (
    <a href="#" className="box">
      <i>
        <FontAwesomeIcon icon={["far", props.icon]} />
      </i>
      <span>{props.emotion}</span>
    </a>
  );
};

export default Box;
