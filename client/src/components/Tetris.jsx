import React, { useState } from "react";
import { createStage, isCollision } from "../gameHelpers";

//Styled Components
import { StyledTetrisWrapper, StyledTetris } from "./styles/StyledTetris";
import { StyledModalButtonWrapper } from "./styles/StyledModalButton";

//Custom hooks
import { usePlayer } from "../hooks/usePlayer";
import { useStage } from "../hooks/useStage";
import { useInterval } from "../hooks/useInterval";
import { useGameStatus } from "../hooks/useGameStatus";
import { useNext } from "../hooks/useNext";

//Components
import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";
import LeaderBoard from "./Leaderboard";
import ViewControl from "./ViewControl";
import AddScore from "./AddScore";

const Tetris = () => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
  const [nextStage, nextTetro, getNewRandTetro] = useNext();
  const [stage, setStage, rowsCleared] = useStage(
    player,
    resetPlayer,
    nextTetro,
    getNewRandTetro
  );
  const [score, setScore, lines, setRows, level, setLevel] =
    useGameStatus(rowsCleared);

  const movePlayer = (dir) => {
    if (!isCollision(player, stage, { x: dir, y: 0 }))
      updatePlayerPos({ x: dir, y: 0 });
  };

  const startGame = () => {
    //Reset everything
    setStage(createStage());
    setDropTime(1000);
    resetPlayer(nextTetro, getNewRandTetro);
    setGameOver(false);
    setScore(0);
    setRows(0);
    setLevel(1);
    setGameStarted(true);
  };

  const drop = () => {
    //Increase level when player has cleared 10 lines
    if (lines >= level * 10) {
      setLevel((prev) => prev + 1);
      setDropTime(1000 / level + 200);
    }

    if (!isCollision(player, stage, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false });
    } else {
      //Game Over
      if (player.pos.y < 1) {
        setGameOver(true);
        setDropTime(null);
        setGameStarted(false);
      }
      updatePlayerPos({ x: 0, y: 0, collided: true });
    }
  };

  const keyUp = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 40) {
        setDropTime(1000 / (level + 1) + 200);
      }
    }
  };

  const dropPlayer = () => {
    setDropTime(null);
    drop();
  };

  const move = ({ keyCode }) => {
    if (!gameOver) {
      //left key
      if (keyCode === 37) {
        movePlayer(-1);
        //right key
      } else if (keyCode === 39) {
        movePlayer(1);
        //down key
      } else if (keyCode === 40) {
        dropPlayer();
        //up key
      } else if (keyCode === 38) {
        playerRotate(stage, 1);
      }
    }
  };

  useInterval(() => {
    drop();
  }, dropTime);

  return (
    <StyledTetrisWrapper
      role="button"
      tabIndex="0"
      onKeyDown={(e) => move(e)}
      onKeyUp={keyUp}
    >
      <StyledTetris>
        <StyledModalButtonWrapper>
          <LeaderBoard />
          <ViewControl />
        </StyledModalButtonWrapper>
        <Stage stage={stage}>
          <StartButton callback={startGame} started={gameStarted} />
        </Stage>
        <aside>
          {gameOver ? (
            <>
              <Display gameOver={gameOver} text="GAME OVER" />
            </>
          ) : (
            <div>
              <Display text={`Score: ${score}`} />
              <Display text={`Lines: ${lines}`} />
              <Display text={`Level: ${level}`} />
              <Display text={`Next: `} setStage={true}>
                <Display>
                  <AddScore score={score} level={level} lines={lines} />
                </Display>{" "}
                <Stage
                  next={true}
                  stage={nextStage}
                  nextStarted={gameStarted}
                />
              </Display>
            </div>
          )}
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
