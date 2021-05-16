import { useEffect, useState } from "react";
import { TETROMINOS, randomTetromino } from "../tetrominos";
import { createNext } from "../gameHelpers";

export const useNext = () => {
  const [nextStage, setNextStage] = useState(createNext());
  const [nextTetro, setNextTetro] = useState(randomTetromino());
  const X_PADDING = 1;
  const Y_PADDNG = nextTetro.length <= 3 ? 2 : 1;

  useEffect(() => {
    const updateNextStage = (prevNextStage) => {
      //reset the nextStage
      const newStage = prevNextStage.map((row) => row.map(() => [0, "clear"]));

      //Then draw the tetromino
      nextTetro.shape.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== 0) {
            newStage[y + Y_PADDNG][x + X_PADDING] = [value, "merged"];
          }
        });
      });
      return newStage;
    };

    setNextStage((prev) => updateNextStage(prev));
  }, [nextTetro, X_PADDING, Y_PADDNG]);

  const getNewRandTetro = () => {
    setNextTetro(randomTetromino());
  };
  return [nextStage, setNextStage, nextTetro, setNextTetro, getNewRandTetro];
};
