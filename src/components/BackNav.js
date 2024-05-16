import React from "react";
import { useNavigate } from "react-router";
import "./Styles.css";
import BackIcon from "../assets/back_icon.png";

const BackNav = () => {
  const navigate = useNavigate();
  return (
    <div className="back-nav" onClick={() => navigate(-1)}>
      <img className="back-icon" src={BackIcon} alt="back-icon" />
    </div>
  );
};

export default BackNav;
