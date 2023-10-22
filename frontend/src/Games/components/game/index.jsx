import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import "./style.css";

function Game({ gameData }) {
  return (
    <div className="container">
      <img className="image" src={gameData.icon} alt="Game logo" />
      <div className="info">
        <div className="title">{gameData.name}</div>
        <div className="description">{gameData.description}</div>
        <Link to={`/game/${gameData.code}`} className="playLink">
          <Button variant="contained">{"Play >"}</Button>
        </Link>
      </div>
    </div>
  );
}

export default Game;
