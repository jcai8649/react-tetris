import React from "react";
import gold from "../asset/img/gold-medal.png";
import { StyledMedals } from "./styles/StyledMedals";
import silver from "../asset/img/silver-medal.png";
import bronze from "../asset/img/bronze-medal.png";
import { StyledPlayer } from "./styles/StyledPlayer";

const Player = ({ name, score, level, lines, rank }) => {
  let placement;

  switch (rank) {
    case 1:
      placement = (
        <div>
          <StyledMedals src={gold} alt="first" />
          {name}
        </div>
      );
      break;
    case 2:
      placement = (
        <div>
          <StyledMedals src={silver} alt="second" />
          {name}
        </div>
      );
      break;
    case 3:
      placement = (
        <div>
          <StyledMedals src={bronze} alt="bronze" />
          {name}
        </div>
      );
      break;

    default:
      placement = (
        <div>
          {rank}. {name}
        </div>
      );
  }
  return (
    <StyledPlayer>
      <div>{placement}</div>
      <div>{score}</div>
    </StyledPlayer>
  );
};

export default Player;
