import styled, { css } from "styled-components";

export const StyledStartButton = styled.button`
  box-sizing: border-box;
  padding: 14px;
  border-radius: 20px;
  border: none;
  color: white;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 1rem;
  outline: none;
  cursor: pointer;
  border: 3px white solid;

  &:hover {
    border: 5px white solid;
  }
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
      disabled: true;
    `};
`;
