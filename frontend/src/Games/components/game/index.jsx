import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./styles.scss";

function Game({ gameData }) {
  return (
    <div className="game">
      <img className="game__image" src={gameData.icon} alt="Game logo" />
      <div className="game__info">
        <div className="game__title">{gameData.name}</div>
        <div>{gameData.description}</div>
        <Link to={`/game/${gameData.code}`} className="gameContainer__playLink">
          <Button variant="contained" endIcon={<ArrowForwardIosIcon />}>
            Play
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Game;
