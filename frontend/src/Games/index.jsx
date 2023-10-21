// import logo from './logo.svg';
// import './App.css';
import { useEffect, useState } from "react";
import Game from "./components/game";

const fetchData = async () => {
  const data = await fetch("http://localhost:3001/games", { method: "get" });
  const json = await data.json();
  console.log(json);
  return json;
};

function Games() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetchData().then((games) => setGames(games));
    console.log(games);
  }, []);

  return (
    <div className="App">
      {games.map((game) => (
        <Game gameData={game} />
      ))}
    </div>
  );
}

export default Games;
