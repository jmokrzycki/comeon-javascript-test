import { useParams } from "react-router-dom";
import { Paper } from "@mui/material";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import "./styles.scss";

function GameWindow() {
  const { code } = useParams();

  return (
    <Paper elevation={3} className="game">
      <Link to={`/games`} className="game__backToGamesListButton">
        <Button
          variant="contained"
          startIcon={<ArrowBackIosIcon />}
          style={{ backgroundColor: "black" }}
        >
          Back to games list
        </Button>
      </Link>
      <iframe
        className="game__gameWindow"
        src={`https://d2k3wptpwv4u4d.cloudfront.net/mcasino/quickspin/${code}/index.html?moneymode=fun`}
        title="Game"
      />
    </Paper>
  );
}

export default GameWindow;
