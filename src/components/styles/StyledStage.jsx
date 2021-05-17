import styled, { css } from "styled-components";

export const StyledStage = styled.div`
  display: grid;
  grid-template-rows: repeat(
    ${(props) => props.height},
    calc(25vw / ${(props) => props.width})
  );

  grid-template-columns: repeat(${(props) => props.width}, 1fr);
  grid-gap: 1px;
  border: 2px solid #333;
  width: 100%;
  max-width: 25vw;
  background: #111;
  outline: none;
  position: relative;

  ${({ height }) =>
    height === 6 &&
    css`
      margin-top: 5px;
      grid-template-rows: repeat(
        ${(props) => props.height},
        calc(10vw / ${(props) => props.width})
      );

      border: none;
      background: white;
    `}

  ${({ nextStarted }) =>
    nextStarted === false &&
    css`
      visibility: hidden;
    `}
`;
