import { Button } from "@mui/material"
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import { SERVER_LOGIN_FACEBOOK } from "../../../serverConnection/serverUrl"
import oauthLogin from "../oauthPopup/oauthPopup"

const FacebookLoginBtn = () => {
  return (
    <>
      <Button
        onClick={(() => oauthLogin(SERVER_LOGIN_FACEBOOK))}
        variant="contained"
        startIcon={<FacebookRoundedIcon />}
      >
        Login with facebook
      </Button>
    </>
  )
}

export default FacebookLoginBtn
