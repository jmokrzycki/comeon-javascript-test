import { useEffect, useState, useContext } from "react";
import GamesContext from "../../contexts/gamesContext";
import { DOMAIN } from "../../../config";
import Game from "../game";
import "./styles.scss";

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

  const filteredGames = games.filter(
    (game) =>
      game.categoryIds.includes(categoryId) &&
      game.name.toLowerCase().includes(searchString.toLowerCase())
  );

  return (
    <div className="gamesList">
      <div className="gamesList__title">Games</div>
      {filteredGames.length > 0 &&
        filteredGames.map((game) => <Game gameData={game} key={game.code} />)}
      {filteredGames.length === 0 && <div>No games found</div>}
    </div>
  );
}

export default GamesList;
