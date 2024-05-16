import React, { useContext, useEffect, useState } from "react";
import "./TicTacToe.css";
import PlayerSelect from "./PlayerSelect";
import { useNavigate } from "react-router";
import { TicTacToeContext } from "../../context/TicTacToeContext";
import TicTacToeLogo from "./TicTacToeLogo";

const TicTacToe = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState();
  const { playerList, setPlayerList } = useContext(TicTacToeContext);
  const savePlayer = (mark, playerName) => {
    let tempList = [...playerList];
    const player = { playerName, mark };
    tempList.push(player);
    setPlayerList(tempList);
    if (step < 2) setStep(step + 1);
    else navigate("./play");
  };

  useEffect(
    () => {
      setPlayerList([]);
      setStep(1);
    },
    // eslint-disable-next-line
    []
  );

  return (
    <section className="bg-section">
      <TicTacToeLogo />
      <PlayerSelect step={step} setStep={setStep} savePlayer={savePlayer} />
    </section>
  );
};

export default TicTacToe;
