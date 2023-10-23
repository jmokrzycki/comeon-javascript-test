import "./style.css";
import { useParams } from "react-router-dom";

function GameWindow() {
  const { code } = useParams();

  return (
    <iframe
      className="gameWindow"
      src={`https://d2k3wptpwv4u4d.cloudfront.net/mcasino/quickspin/${code}/index.html?moneymode=fun`}
      title="Game"
    />
  );
}

export default GameWindow;
