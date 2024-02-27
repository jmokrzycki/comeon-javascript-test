import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./styles.scss";

function Game({ gameData }) {
  return (
    <div className="gameSection">
      <img className="gameSection__image" src={gameData.icon} alt={`Logo for ${gameData.name}`} />
      <div className="gameSection__info">
        <h2 className="gameSection__title">{gameData.name}</h2>
        <p>{gameData.description}</p>
        <Link to={`/game/${gameData.code}`} className="gameContainer__playLink">
          <Button variant="contained" endIcon={<ArrowForwardIosIcon />} style={{ backgroundColor: "black" }} aria-label={`Play ${gameData.name}`}>
            Play
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Game;
