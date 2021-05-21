import React from "react";
import { StyledStage } from "./styles/StyledStage";

import Cell from "./Cell";

const Stage = ({ stage, children, nextStarted }) => {
  return (
    <StyledStage
      width={stage[0].length}
      height={stage.length}
      nextStarted={nextStarted}
    >
      {stage.map((row) =>
        row.map((cell, x) => (
          <Cell key={x} type={cell[0]} isNextCell={nextStarted} />
        ))
      )}
      {children}
    </StyledStage>
  );
};

export default Stage;
