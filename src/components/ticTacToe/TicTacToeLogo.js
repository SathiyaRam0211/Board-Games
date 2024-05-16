import React from "react";
import "./TicTacToe.css";
import CrossIcon from "../../assets/X_icon.png";
import CircleIcon from "../../assets/O_icon.png";

const TicTacToeLogo = () => {
  return (
    <>
      <div className="logo">
        <img className="logo-icon" src={CrossIcon} alt="X-icon" />
        <img className="logo-icon" src={CircleIcon} alt="O-icon" />
        <img className="logo-icon" src={CrossIcon} alt="X-icon" />
        <img className="logo-icon" src={CircleIcon} alt="O-icon" />
      </div>
    </>
  );
};

export default TicTacToeLogo;
