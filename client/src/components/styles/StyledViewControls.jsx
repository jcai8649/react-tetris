import styled from "styled-components";

export const StyledViewControls = styled.div`
  width: 20vw;
  height: 30vh;
  padding: 10px;
  background-color: white;
  color: black;
  border-radius: 20px;
  font-family: Pixel, Arial, Helvetica, sans-serif;
  min-height: 150px;
  opacity: 75%;
  max-width: 15em;
  max-height: 15em;
`;

export const StyledViewControlsHeader = styled.div`
  text-align: center;
  margin-top: 10px;
`;

export const StyledViewControlsContainer = styled.div`
  display: flex;
  margin-top: 10px;
  width: 20vw;
  height: 25vh;
  max-width: 15em;
  max-height: 15em;
  overflow: auto;
  justify-content: center;
`;

export const StyledViewControlsImg = styled.img`
  width: 19vw;
  height: 16vh;

  @media (min-width: 1000px) {
    width: 13vw;
    height: 13vh;
  }
`;
