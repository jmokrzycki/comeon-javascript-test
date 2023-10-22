import { useEffect, useState, useContext } from "react";
import GamesContext from "../../contexts/gamesContext";
import { DOMAIN } from "../../../config";
import Game from "../game";

const fetchData = async () => {
  const data = await fetch(`${DOMAIN}/games`, { method: "get" });
  const json = await data.json();
  return json;
};

function GamesList() {
  const [games, setGames] = useState([]);
  const { categoryId } = useContext(GamesContext);
  const { searchString } = useContext(GamesContext);

  useEffect(() => {
    fetchData().then((games) => setGames(games));
  }, []);

  return (
    <div className="App">
      {searchString}
      {games
        .filter(
          (game) =>
            game.categoryIds.includes(categoryId) &&
            game.name.toLowerCase().includes(searchString.toLowerCase())
        )
        .map((game) => (
          <Game gameData={game} key={game.code} />
        ))}
    </div>
  );
}

export default GamesList;
