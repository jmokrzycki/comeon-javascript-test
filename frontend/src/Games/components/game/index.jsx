import { useEffect, useState } from "react";
import "./style.css";

function Game({ gameData }) {
  return (
    <div className="container">
      <img className={"image"} src={gameData.icon} alt="image" />
      <div className="info">
        <div className="title">{gameData.name}</div>
        <div className="description">{gameData.description}</div>
      </div>
    </div>
  );
}

export default Game;
