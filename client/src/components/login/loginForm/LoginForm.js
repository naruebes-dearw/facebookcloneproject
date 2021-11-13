import { Button, TextField } from "@mui/material";
import "./LoginForm.css";
import { useState } from "react";
import { useHistory } from "react-router";
import { login } from "../../../serverConnection/serverConnection";
import { useStateValue } from "../../../contextAPI/UserProvider";

const LoginForm = () => {
  const history = useHistory();
  const [userInfo, dispatch] = useStateValue();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
    history.push("/");
  }

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <TextField
          onChange={e => setUsername(e.target.value)}
          name="username"
          id="outlined-basic"
          label="username"
          variant="outlined"
          required
        />
        <TextField
          onChange={e => setPassword(e.target.value)}
          type="password"
          name="password"
          id="outlined-basic"
          label="password"
          variant="outlined"
          required
        />
        <Button type="submit" variant="contained">Login</Button>
      </form>
    </div>
  )
}

export default LoginForm
