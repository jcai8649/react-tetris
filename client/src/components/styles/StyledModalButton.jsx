import styled from "styled-components";

export const StyledModalButton = styled.button`
  box-sizing: border-box;
  padding: 14px;
  border-radius: 20px;
  border: none;
  color: white;
  background: black;
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 1rem;
  outline: none;
  cursor: pointer;
  opacity: 80%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  &:hover {
    border: 3px white solid;
    box-shadow: rgba(240, 46, 170, 0.4) 0px 5px,
      rgba(240, 46, 170, 0.3) 0px 10px, rgba(240, 46, 170, 0.2) 0px 15px,
      rgba(240, 46, 170, 0.1) 0px 20px, rgba(240, 46, 170, 0.05) 0px 25px;
  }
`;

export const StyledModalButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 10px;
  gap: 10px;

  @media (max-width: 600px) {
    flex-direction: row;
    order: 1;
  }
`;
