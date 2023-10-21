import { useEffect, useState, useContext } from "react";
import GamesContext from "../../contexts/gamesContext";
import Game from "../game";

const fetchData = async () => {
  const data = await fetch("http://localhost:3001/games", { method: "get" });
  const json = await data.json();
  console.log(json);
  return json;
};

function GamesList() {
  const [games, setGames] = useState([]);
  const { categoryId } = useContext(GamesContext);

  useEffect(() => {
    fetchData().then((games) => setGames(games));
    console.log(games);
  }, []);

  return (
    <div className="App">
      {games
        .filter((game) => game.categoryIds.includes(categoryId))
        .map((game) => (
          <Game gameData={game} key={game.code} />
        ))}
    </div>
  );
}

export default GamesList;
