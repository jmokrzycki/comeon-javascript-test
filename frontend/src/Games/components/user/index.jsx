import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./style.css";

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
    <>
      <div className="containerUser">
        <img className="avatar" src={avatar} alt="Avatar" />
        <div className="userInfo">
          <div className="name">{name}</div>
          <div className="event">{event}</div>
        </div>
      </div>
      <Link to={`/login`} className="playLink">
        <Button onClick={handleLogout}>Logout</Button>
      </Link>
    </>
  );
}

export default User;
