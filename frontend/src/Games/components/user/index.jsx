import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import "./styles.scss";

function User() {
  const name = sessionStorage.getItem("name");
  const avatar = sessionStorage.getItem("avatar");
  const event = sessionStorage.getItem("event");

  const handleLogout = () => {
    sessionStorage.clear("name");
    sessionStorage.clear("avatar");
    sessionStorage.clear("event");
  };

  return (
    <div>
      <div className="user">
        <img className="user__avatar" src={avatar} alt="Avatar" />
        <div className="user__info">
          <div className="user__name">{name}</div>
          <div className="user__event">{event}</div>
        </div>
      </div>
      <Link to={`/login`} className="user__logout">
        <Button
          variant="contained"
          onClick={handleLogout}
          startIcon={<ArrowBackIosIcon />}
          style={{ backgroundColor: "black" }}
        >
          Log Out
        </Button>
      </Link>
    </div>
  );
}

export default User;
