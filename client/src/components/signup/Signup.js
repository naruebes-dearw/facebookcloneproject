import { Button, TextField } from "@mui/material"
import { useState } from "react"
import { useHistory } from "react-router";
import { signup } from "../../serverConnection/serverConnection";
import "./Signup.css";

const Signup = () => {
  const history = useHistory();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const signupInfo = {
      firstName,
      lastName,
      username,
      password
    }

    const signupStatus = await signup(signupInfo);
    if (signupStatus === "success") {
      alert("Create new accout success.")
      setFirstName("");
      setLastName("");
      setUsername("");
      setPassword("");
    }
    if (signupStatus === "exists") {
      return alert("The username has already been used.");
    }
    history.push("/");
  }

  return (
    <div className="signup">
      <div className="signup-container">
        <div className="signup-title">
          <h1>Sign Up</h1>
          <p>It's quick and easy</p>
        </div>
        <div className="signup-form">
          <form onSubmit={handleSubmit}>
            <TextField
              onChange={e => setFirstName(e.target.value)}
              value={firstName}
              name="firstName"
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              required
            />
            <TextField
              onChange={e => setLastName(e.target.value)}
              value={lastName}
              name="lastName"
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              required
            />
            <TextField
              onChange={e => setUsername(e.target.value)}
              value={username}
              name="username"
              id="outlined-basic"
              label="Username"
              variant="outlined"
              required
            />
            <TextField
              onChange={e => setPassword(e.target.value)}
              value={password}
              type="password"
              name="password"
              id="outlined-basic"
              label="New password"
              variant="outlined"
              required
            />
            <Button type="submit" variant="contained">Sign Up</Button>
            <p>Already have an account?
              <a href="#" onClick={() => history.push("/")}> Log in</a>
            </p>
          </form>
        </div>
      </div>
    </div >
  )
}

export default Signup
