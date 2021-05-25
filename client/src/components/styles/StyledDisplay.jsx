import styled, { css } from "styled-components";

export const StyledDisplay = styled.div`
  box-sizing: border-box;
  align-items: center;
  margin: 0 0 20px 0;
  padding: 20px;
  min-height: 15px;
  width: auto;
  border-radius: 20px;
  color: ${(props) => (props.gameOver ? "red" : "#black")};
  background: white;
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 0.8rem;
  opacity: 80%;

  ${({ started }) =>
    started &&
    css`
      flex-direction: column;
    `}

  @media (max-width: 600px) {
    &:not(:last-of-type) {
      max-height: 15px;
    }
    max-width: 10em;
  }
`;
