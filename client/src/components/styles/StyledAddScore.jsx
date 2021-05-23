import styled from "styled-components";

export const StyledAddScore = styled.div`
  padding: 5px;
  font-size: 0.9em;
`;

export const StyledInput = styled.input`
  margin: 5px 0;
`;

export const StyledSubmit = styled.button`
  display: inline-block;
  padding: 0.3em 1.2em;
  margin: 0 0.1em 0.1em 0;
  border: 0.16em solid rgba(255, 255, 255, 0);
  border-radius: 2em;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  color: #ffffff;
  text-shadow: 0 0.04em 0.04em rgba(0, 0, 0, 0.35);
  text-align: center;
  transition: all 0.2s;
  background-color: #4e9af1;
  cursor: pointer;
  :hover {
    border-color: rgba(255, 255, 255, 1);
    opacity: 70%b;
  }

  @media (max-width: 30em) {
    display: block;
    margin: 0.2em auto;
  }
`;
