import styled from "styled-components";

export const StyledPlayer = styled.li`
  margin-top: 5px;
  padding: 0 20px 0 20px;
  font-size: 1vw;
  font-family: "Prompt", sans-serif;
  list-style-type: none;
  list-style-position: inside;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid black;

  @media (min-width: 1300px) {
    font-size: 0.8vw;
  }
`;
