import { useState } from "react";
import Categories from "./components/categories";
import GamesList from "./components/gamesList";
import GamesContex from "./contexts/gamesContext";
import "./style.css";

function Games() {
  const [categoryId, setCategoryId] = useState(0);

  return (
    <GamesContex.Provider value={{ categoryId, setCategoryId }}>
      <div className="container">
        <GamesList />
        <Categories />
      </div>
    </GamesContex.Provider>
  );
}

export default Games;
