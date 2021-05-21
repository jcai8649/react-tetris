import React from "react";
import { StyledDisplay } from "./styles/StyledDisplay";

const Display = ({ gameOver, text, tetromino, children }) => {
  return children ? (
    <StyledDisplay tetromino={tetromino}>
      {text} {children}
    </StyledDisplay>
  ) : (
    <StyledDisplay gameOver={gameOver}>{text}</StyledDisplay>
  );
};

export default Display;
