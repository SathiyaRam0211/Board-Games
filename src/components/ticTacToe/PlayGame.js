import React, { useContext, useEffect, useState } from "react";
import "./TicTacToe.css";
import { TicTacToeContext } from "../../context/TicTacToeContext";
import TicTacToeLogo from "./TicTacToeLogo";
import PlayBlock from "./PlayBlock";
import RestartIcon from "../../assets/restart_icon.png";
import BackNav from "../BackNav";
import { useNavigate } from "react-router";

const PlayGame = () => {
  const navigate = useNavigate();
  const { playerList } = useContext(TicTacToeContext);
  const [playerName, setPlayerName] = useState();
  const [stepCount, setStepCount] = useState(1);
  const [currentPlayer, setCurrentPlayer] = useState();
  const [winner, setWinner] = useState();
  const rows = 3;
  const [gameMatrix, setGameMatrix] = useState(
    Array.from({ length: rows }, () => Array(rows).fill(null))
  );

  const findPlayer = (mark) => {
    if (mark)
      return playerList.filter((player) => player.mark === mark)[0].playerName;
    return null;
  };

  const submitStep = (mark, blockNo) => {
    const tempMatrix = [...gameMatrix];
    tempMatrix[Math.floor(blockNo / rows)][blockNo % rows] = mark;
    setGameMatrix(tempMatrix);
    setWinner(findPlayer(checkForWin(tempMatrix)));
  };

  const checkForWin = (matrix) => {
    for (let i = 0; i < rows; i++) {
      if (
        matrix[i][0] === matrix[i][1] &&
        matrix[i][1] === matrix[i][2] &&
        matrix[i][0] !== null
      ) {
        return matrix[i][0];
      }
      if (
        matrix[0][i] === matrix[1][i] &&
        matrix[1][i] === matrix[2][i] &&
        matrix[0][i] !== null
      ) {
        return matrix[0][i];
      }
    }
    if (
      (matrix[0][0] === matrix[1][1] &&
        matrix[1][1] === matrix[2][2] &&
        matrix[0][0] !== null) ||
      (matrix[0][2] === matrix[1][1] &&
        matrix[1][1] === matrix[2][0] &&
        matrix[0][2] !== null)
    ) {
      return matrix[1][1];
    }
    return null;
  };

  const handleRestart = () => {
    setGameMatrix(Array.from({ length: rows }, () => Array(rows).fill(null)));
    setWinner(null);
    setStepCount(1);
  };

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = "";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    window.addEventListener("unload", handleRestart);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("unload", handleRestart);
    };
  }, [navigate]);

  useEffect(() => {
    setCurrentPlayer(stepCount % 2 !== 0 ? playerList[0] : playerList[1]);
  }, [stepCount, playerList]);

  useEffect(() => {
    if (currentPlayer) {
      setPlayerName(currentPlayer.playerName);
    }
  }, [currentPlayer]);

  return (
    <div className="bg-section">
      <TicTacToeLogo />
      <div className="main-section">
        <BackNav />
        <div>
          <div className="flex-block">
            {winner && <span className="primary-text">{winner} wins</span>}
            {!winner && stepCount < 10 && (
              <span className="primary-text">{playerName}'s Turn</span>
            )}
            {!winner && stepCount === 10 && (
              <span className="primary-text">Match Draw</span>
            )}
            {((winner && winner !== null) || stepCount === 10) && (
              <img
                className="restart-icon"
                src={RestartIcon}
                alt="restart-icon"
                onClick={handleRestart}
              ></img>
            )}
          </div>

          <div className="game-board">
            {[...Array(9).keys()].map((index) => (
              <PlayBlock
                disabled={(winner && winner !== null) || stepCount === 10}
                key={index}
                playerList={playerList}
                blockNo={index}
                stepCount={stepCount}
                setStepCount={setStepCount}
                submitStep={submitStep}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayGame;
