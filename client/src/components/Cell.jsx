import React from "react";
import { StyledCell } from "./styles/StyledCell";
import { TETROMINOS } from "../tetrominos";

const Cell = ({ type, isNextCell }) => {
  return (
    <StyledCell
      isNextCell={isNextCell}
      type={type}
      color={TETROMINOS[type].color}
    />
  );
};

export default React.memo(Cell);
