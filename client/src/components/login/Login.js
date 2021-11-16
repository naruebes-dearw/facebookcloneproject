import "./Login.css";
import { useHistory } from "react-router";
import Button from '@mui/material/Button';
import LoginForm from "./loginForm/LoginForm";
import GoogleLoginBtn from "./loginBtn/GoogleLoginBtn";
import FacebookLoginBtn from "./loginBtn/FacebookLoginBtn";
import GuestLoginBtn from "./loginBtn/GuestLoginBtn";
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import GoogleIcon from '@mui/icons-material/Google';
// import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
// import { SERVER_LOGIN_GOOGLE } from "../../serverConnection/serverUrl";
// import oauthLogin from "./oauthPopup/oauthPopup";

// const url = 'https://reqres.in/api/products/3';

const Login = () => {
  const history = useHistory();
  return (
    <div className="l">
      <div className="l-left">
        <div className="l-left-text">
          <h1>Facebook <span>Clone</span></h1>
          <p>
            Fakebook helps you connect and share with the people in your life.
          </p>
        </div>
      </div>

      <div className="l-right">
        <div className="l-login">
          <div className="l-input">
            <LoginForm />
          </div>
          <p className="or">or</p>
          <div className="l-option">
            <GuestLoginBtn />
            <FacebookLoginBtn />
            <GoogleLoginBtn />
            <Button
              className="login-guest"
              onClick={() => history.push("/signup")}
            >
              create new account
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;