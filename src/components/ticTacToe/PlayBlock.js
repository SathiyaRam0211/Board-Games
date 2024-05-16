import React, { useEffect, useState } from "react";
import "./TicTacToe.css";
import CrossIcon from "../../assets/X_icon.png";
import CircleIcon from "../../assets/O_icon.png";

const PlayBlock = ({
  stepCount,
  setStepCount,
  playerList,
  submitStep,
  blockNo,
  disabled,
}) => {
  const [isSelected, setIsSelected] = useState(false);
  const [mark, setMark] = useState(null);

  useEffect(() => {
    if (stepCount === 1) {
      setIsSelected(false);
    }
  }, [stepCount]);

  const handleClick = () => {
    if (!isSelected && playerList.length) {
      setIsSelected(true);
      setStepCount(stepCount + 1);
      const tempMark =
        stepCount % 2 !== 0 ? playerList[0].mark : playerList[1].mark;
      setMark(tempMark);
      submitStep(tempMark, blockNo);
    }
  };

  return (
    <>
      <div
        key={blockNo}
        className={`play-block ${isSelected ? "selected" : ""} ${
          disabled ? "disabled" : ""
        }`}
        onClick={handleClick}
      >
        {isSelected && mark === "X" && (
          <img className="block-icon " src={CrossIcon} alt="X-icon" />
        )}
        {isSelected && mark === "O" && (
          <img className="block-icon" src={CircleIcon} alt="O-icon" />
        )}
      </div>
    </>
  );
};

export default PlayBlock;
