import { Button } from "@mui/material"
import GoogleIcon from '@mui/icons-material/Google';
import { SERVER_LOGIN_GOOGLE } from "../../../serverConnection/serverUrl"
import oauthLogin from "../oauthPopup/oauthPopup"

const GoogleLoginBtn = () => {
  return (
    <>
      <Button
        onClick={(() => oauthLogin(SERVER_LOGIN_GOOGLE))}
        variant="outlined"
        startIcon={<GoogleIcon />}
      >
        Login with google
      </Button>
    </>
  )
}

export default GoogleLoginBtn
