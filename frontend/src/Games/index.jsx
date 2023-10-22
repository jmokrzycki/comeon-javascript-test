import { useState } from "react";
import Categories from "./components/categories";
import GamesList from "./components/gamesList";
import GamesContex from "./contexts/gamesContext";
import SearchGameIinput from "./components/searchGameInput";
import "./style.css";

function Games() {
  const [categoryId, setCategoryId] = useState(0);
  const [searchString, setSearchString] = useState("");

  return (
    <GamesContex.Provider
      value={{ categoryId, setCategoryId, searchString, setSearchString }}
    >
      <div className="container">
        <div className="header">
          <div />
          <SearchGameIinput className="searchInput" />
        </div>
        <div className="content">
          <GamesList />
          <Categories />
        </div>
      </div>
    </GamesContex.Provider>
  );
}

export default Games;
