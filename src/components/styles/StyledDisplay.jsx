import styled, { css } from "styled-components";

export const StyledDisplay = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.started ? "flex" : "hidden")};
  align-items: center;
  margin: 0 0 20px 0;
  padding: 20px;
  min-height: 30px;
  width: auto;
  border-radius: 20px;
  color: ${(props) => (props.gameOver ? "red" : "#black")};
  background: white;
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 0.8rem;
  opacity: 70%;

  ${(setStage) =>
    setStage &&
    css`
      flex-direction: column;
    `}
`;
