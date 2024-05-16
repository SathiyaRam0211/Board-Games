import React, { useEffect, useState } from "react";
import "./TicTacToe.css";
import CrossIcon from "../../assets/X_icon.png";
import CircleIcon from "../../assets/O_icon.png";
import BlockSelect from "./BlockSelect";
import BackNav from "../BackNav";

const PlayerSelect = ({ step = 0, setStep, savePlayer }) => {
  const [playerName, setPlayerName] = useState("");
  const [mark, setMark] = useState("X");

  const handleSubmit = () => {
    savePlayer(mark, playerName);
    if (mark === "X") setMark("O");
    else setMark("X");
  };

  useEffect(() => {
    setPlayerName(`Player ${step}`);
  }, [step]);

  return (
    <>
      <div className="main-section">
        <BackNav />
        <div>
          <span className="primary-text">Choose your mark</span>
          <div className="flex-block">
            <BlockSelect
              src={CrossIcon}
              alt="X"
              mark={mark}
              setMark={setMark}
            />
            <BlockSelect
              src={CircleIcon}
              alt="O"
              mark={mark}
              setMark={setMark}
            />
          </div>
        </div>
        <div>
          <span className="primary-text">Enter your Name</span>
          <input
            className="custom-input"
            value={playerName}
            onChange={(event) => {
              setPlayerName(event.target.value);
            }}
          ></input>
        </div>
      </div>
      <div className="footer-section">
        <button
          disabled={step === 1}
          className="action-btn"
          onClick={() => setStep(step - 1)}
        >
          <span>Previous</span>
        </button>
        <button className="action-btn" onClick={handleSubmit}>
          <span>Next</span>
        </button>
      </div>
    </>
  );
};

export default PlayerSelect;
