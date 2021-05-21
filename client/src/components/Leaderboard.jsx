import React, { useEffect, useState } from "react";
import {
  StyledLeaderboard,
  StyledLeaderboardHeader,
  StyledLeaderboardList,
  StyledLeaderboardContainer,
} from "./styles/StyledLeaderboard";
import Error from "./Error";
import tetrisServer from "../apis/tetrisServer";
import Player from "./Player";
import Loader from "./Loader";

const LeaderBoard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setLoadError(false);
      try {
        const response = await tetrisServer.get("./posts");
        setLeaderboardData(
          [...response.data].sort((a, b) => b.score - a.score)
        );
      } catch (e) {
        setLoadError(true);
      }
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const renderData = () => {
    if (isLoading) {
      return <Loader />;
    }

    if (loadError) {
      return <Error />;
    }

    return (
      <StyledLeaderboardContainer>
        <StyledLeaderboardList>
          {leaderboardData.map((player, idx) => {
            return (
              <Player
                key={player._id}
                name={player.name}
                score={player.score}
                lines={player.lines}
                level={player.level}
                rank={++idx}
              />
            );
          })}
        </StyledLeaderboardList>
      </StyledLeaderboardContainer>
    );
  };

  return (
    <StyledLeaderboard>
      <StyledLeaderboardHeader>Top Scores</StyledLeaderboardHeader>
      {renderData()}
    </StyledLeaderboard>
  );
};

export default React.memo(LeaderBoard);
