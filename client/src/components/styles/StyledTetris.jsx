import styled from "styled-components";

export const StyledTetrisWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  font-family: "Roboto", sans-serif;
  background-size: cover;
  overflow: hidden;
  outline: none;
`;

export const StyledTetris = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 40px;
  margin: 0 auto;
  max-width: 900px;

  aside {
    width: 100%;
    max-width: 12em;
    display: block;
    padding: 0 20px;
  }
`;
