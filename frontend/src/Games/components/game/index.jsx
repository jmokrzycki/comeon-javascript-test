import { Button } from "@mui/material";
import "./style.css";

function Game({ gameData }) {
  return (
    <div className="container">
      <img className="image" src={gameData.icon} alt="Game logo" />
      <div className="info">
        <div className="title">{gameData.name}</div>
        <div className="description">{gameData.description}</div>
        <Button className="playButton" variant="contained">
          {"Play >"}
        </Button>
      </div>
    </div>
  );
}

export default Game;
