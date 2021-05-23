import React, { useState } from "react";
import Loader from "./Loader";
import Error from "./Error";
import tetrisServer from "../apis/tetrisServer";
import {
  StyledAddScore,
  StyledInput,
  StyledSubmit,
} from "./styles/StyledAddScore";

const AddScore = ({ score, level, lines, setLoadScore }) => {
  const [playerName, setPlayerName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [postSuccess, setPostSuccess] = useState(false);
  const [loadError, setLoadError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setLoadError(false);
    setPlayerName("");
    try {
      await tetrisServer.post("./posts", {
        name: playerName,
        level: level,
        lines: lines,
        score: score,
      });
      setPostSuccess(true);
      setLoadScore(true);
    } catch (e) {
      setLoadError(true);
    }
    setIsLoading(false);
  };

  const handleChange = (e) => {
    setPlayerName(e.target.value);
  };

  return (
    <StyledAddScore>
      {isLoading ? (
        <Loader />
      ) : postSuccess ? (
        <div>SCORE SUBMITTED!</div>
      ) : (
        <form onSubmit={handleSubmit}>
          <p>Submit Your Score</p>
          <br />
          <p>Your final stats</p>
          <br />
          <p>
            level: {level} <br /> lines: {lines} <br /> score: {score}
          </p>
          <br />

          {loadError ? <Error /> : ""}
          <label>Player Name:</label>
          <StyledInput
            type="text"
            required
            onChange={handleChange}
            value={playerName}
          />
          <StyledSubmit>Submit</StyledSubmit>
        </form>
      )}
    </StyledAddScore>
  );
};

export default AddScore;
