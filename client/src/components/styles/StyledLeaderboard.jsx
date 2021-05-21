import styled from "styled-components";

export const StyledLeaderboard = styled.div`
  padding: 10px;
  background-color: white;
  margin-right: 15px;
  color: black;
  border-radius: 20px;
  font-family: Pixel, Arial, Helvetica, sans-serif;
  min-height: 150px;
  opacity: 75%;
  max-width: 15em;
`;

export const StyledLeaderboardHeader = styled.div`
  text-align: center;
  margin-top: 10px;
`;

export const StyledLeaderboardContainer = styled.div`
  margin-top: 10px;
  width: 20vw;
  height: 25vh;
  max-width: 15em;
  overflow: auto;

  @media (max-width: 600px) {
    width: 30vw;
  }
`;

export const StyledLeaderboardList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
