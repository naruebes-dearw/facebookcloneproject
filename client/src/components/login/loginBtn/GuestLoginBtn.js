import { Button } from "@mui/material"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { login } from "../../../serverConnection/serverConnection";
import { useStateValue } from "../../../contextAPI/UserProvider";
import { useHistory } from "react-router";

const GuestUserName = "guest";
const GuestPassword = "1234";

const GuestLoginBtn = () => {
  const history = useHistory();
  const [userInfo, dispatch] = useStateValue();

  const guestLogin = () => {
    login(dispatch, {
      username: GuestUserName,
      password: GuestPassword
    });
    history.push("/");
  }

  return (
    <>
      <Button
        onClick={(() => guestLogin())}
        variant="contained"
        // color="secondary"
        style={{ backgroundColor: "grey" }}
        startIcon={<AccountCircleIcon />}
      >
        Login as guest
      </Button>
    </>
  )
}

export default GuestLoginBtn;
