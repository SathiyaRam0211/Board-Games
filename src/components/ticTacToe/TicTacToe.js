import React, { useEffect, useState } from "react";
import "./TicTacToe.css";
import CrossIcon from "../../assets/X_icon.png";
import CircleIcon from "../../assets/O_icon.png";
import PlayerSelect from "./PlayerSelect";

const TicTacToe = () => {
  const [step, setStep] = useState(1);
  const [playerList, setPlayerList] = useState([]);
  const savePlayer = (mark, playerName) => {
    let tempList = [...playerList];
    if (tempList.length < 1) {
      setStep(step + 1);
      const player = { playerName, mark };
      tempList.push(player);
      setPlayerList(tempList);
    } else {
    }
  };

  return (
    <section className="bg-section">
      <div className="logo">
        <img className="logo-icon" src={CrossIcon} alt="X-icon" />
        <img className="logo-icon" src={CircleIcon} alt="O-icon" />
        <img className="logo-icon" src={CrossIcon} alt="X-icon" />
        <img className="logo-icon" src={CircleIcon} alt="O-icon" />
      </div>
      {playerList.length < 2 && (
        <PlayerSelect step={step} setStep={setStep} savePlayer={savePlayer} />
      )}
    </section>
  );
};

export default TicTacToe;
