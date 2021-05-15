import React from "react";
import {
  StyledStartButton,
  StyledStartContainer,
} from "./styles/StyledStartButton";

const StartButton = ({ callback, started }) => {
  return (
    <StyledStartContainer started={started}>
      <StyledStartButton onClick={callback}>New Game</StyledStartButton>
    </StyledStartContainer>
  );
};

export default StartButton;
