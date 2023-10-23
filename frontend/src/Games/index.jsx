import { useState } from "react";
import Categories from "./components/categories";
import GamesList from "./components/gamesList";
import GamesContex from "./contexts/gamesContext";
import SearchGameIinput from "./components/searchGameInput";
import User from "./components/user";
import Paper from "@mui/material/Paper";
import "./styles.scss";

function Games() {
  const [categoryId, setCategoryId] = useState(0);
  const [searchString, setSearchString] = useState("");

  return (
    <GamesContex.Provider
      value={{ categoryId, setCategoryId, searchString, setSearchString }}
    >
      <Paper elevation={3} className="games">
        <div className="games__header">
          <User />
          <SearchGameIinput className="games__searchInput" />
        </div>
        <div className="games__content">
          <GamesList />
          <Categories />
        </div>
      </Paper>
    </GamesContex.Provider>
  );
}

export default Games;
