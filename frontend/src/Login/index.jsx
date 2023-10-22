import { useState } from "react";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import "./style.css";

function Login() {
  const usernameInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const [isLoginError, setIsLoginError] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    const data = await fetch("http://localhost:3001/login", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: usernameInputRef.current.value, // rebecka
        password: passwordInputRef.current.value, // secret
      }),
    });

    const json = await data.json();
    console.log(json.status);
    if (json.status === "success") {
      setIsLoginError(false);
      const player = json.player;

      sessionStorage.setItem("name", player.name);
      sessionStorage.setItem("avatar", player.avatar);
      sessionStorage.setItem("event", player.event);

      navigate("/games");
    } else if (json.status === "fail") {
      setIsLoginError(true);
    }
  };

  return (
    <div className="loginForm">
      <span className="loginFormTitle">Login</span>
      <TextField
        label="Username"
        inputRef={usernameInputRef}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <PersonIcon />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        label="Username"
        inputRef={passwordInputRef}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <LockIcon />
            </InputAdornment>
          ),
        }}
      />
      {isLoginError && (
        <span className="loginFormError">Wrong username or password!</span>
      )}
      <Button variant="contained" onClick={handleLogin}>
        Login
      </Button>
    </div>
  );
}

export default Login;
