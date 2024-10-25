import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Box.scss";

const Box = ({ index, icon, emotion, isActive, toggleActive }) => {
  return (
    <a
      href="#"
      className={isActive === 1 ? `box ${emotion}` : `box`}
      onClick={(e) => toggleActive(e, { index, state: isActive === 0 ? 1 : 0 })}
      draggable="false"
    >
      <i>{icon && <FontAwesomeIcon icon={["far", icon]} />}</i>
      <span>{emotion}</span>
    </a>
  );
};

export default Box;
