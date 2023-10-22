import "./style.css";

function GameWindow({ code }) {
  return (
    <iframe
      className="container"
      src={`https://d2k3wptpwv4u4d.cloudfront.net/mcasino/quickspin/${code}/index.html?moneymode=fun`}
      title="Game"
    />
  );
}

export default GameWindow;
