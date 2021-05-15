import React from "react";
import { StyledStage } from "./styles/StyledStage";

import Cell from "./Cell";

const Stage = ({ stage, children }) => {
  return (
    <StyledStage width={stage[0].length} height={stage.length}>
      {stage.map((row) =>
        row.map((cell, x) => <Cell key={x} type={cell[0]} />)
      )}
      {children}
    </StyledStage>
  );
};

export default Stage;
