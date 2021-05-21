import React, { useState } from "react";
import Loader from "./Loader";
import tetrisServer from "../apis/tetrisServer";

const AddScore = ({ score, level, lines }) => {
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
    } catch (e) {
      setLoadError(true);
    }
    setIsLoading(false);
  };

  const handleChange = (e) => {
    setPlayerName(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>Add Your Score</p>
        <br />
        <p>Your final stats</p>
        <p>
          level: {level}, lines: {lines}, score: {score}
        </p>
        <br />
        <label>name:</label>
        <input
          type="text"
          required
          onChange={handleChange}
          value={playerName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddScore;
