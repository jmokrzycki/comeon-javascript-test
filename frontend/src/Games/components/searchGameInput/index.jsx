import { useContext } from "react";
import GamesContext from "../../contexts/gamesContext";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

function SearchGameIinput({ className }) {
  const { setSearchString } = useContext(GamesContext);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setSearchString(e.target.value);
    }
  };

  const handleClickSearch = () => {
    setSearchString(document.getElementById("searchGameInput").value);
  };

  return (
    <TextField
      className={className}
      label="Search Game"
      id="searchGameInput"
      onKeyDown={handleKeyDown}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleClickSearch} aria-label="Search">
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}

export default SearchGameIinput;
