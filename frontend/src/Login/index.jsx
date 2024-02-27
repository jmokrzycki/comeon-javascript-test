import { useState } from "react";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import Paper from "@mui/material/Paper";
import "./styles.scss";
import { DOMAIN } from "../config";

function Login() {
  const usernameInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const [isLoginError, setIsLoginError] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    const data = await fetch(`${DOMAIN}/login`, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: usernameInputRef.current.value,
        password: passwordInputRef.current.value,
      }),
    });

    const json = await data.json();

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

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <Paper elevation={3} className="loginForm">
      <TextField
        label="Username"
        inputRef={usernameInputRef}
        onKeyDown={handleKeyDown}
        error={isLoginError}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <PersonIcon />
            </InputAdornment>
          ),
          "aria-invalid": isLoginError ? "true" : "false",
          "aria-describedby": "form-error",
        }}
      />
      <TextField
        label="Password"
        type="password"
        inputRef={passwordInputRef}
        onKeyDown={handleKeyDown}
        error={isLoginError}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <LockIcon />
            </InputAdornment>
          ),
          "aria-invalid": isLoginError ? "true" : "false",
          "aria-describedby": "form-error",
        }}
      />
      {isLoginError && (
        <span id="form-error" className="loginForm__error">
          Wrong username or password!
        </span>
      )}
      <Button variant="contained" onClick={handleLogin} className="loginForm__loginButton" style={{ backgroundColor: "black" }}>
        Login
      </Button>
    </Paper>
  );
}

export default Login;
