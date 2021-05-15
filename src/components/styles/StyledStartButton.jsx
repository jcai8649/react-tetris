import styled, { css } from "styled-components";

export const StyledStartButton = styled.button`
  box-sizing: border-box;
  padding: 20px;
  min-height: 30px;
  border-radius: 20px;
  border: none;
  color: black;
  background: white;
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 1rem;
  outline: none;
  cursor: pointer;
  opacity: 80%;
`;

export const StyledStartContainer = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  width: 100%;
  z-index: 1;
  opacity: 1;
  visibility: visible;
  transition: all 0.5s ease-in-out;
  ${({ started }) =>
    started &&
    css`
      opacity: 0;
      top: 40%;
      visibility: hidden;
    `};
`;
