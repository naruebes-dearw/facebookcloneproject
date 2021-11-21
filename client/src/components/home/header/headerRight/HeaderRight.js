import "./HeaderRight.css";
import { useHistory } from "react-router";
import { useStateValue } from "../../../../contextAPI/UserProvider";
import { logout } from "../../../../serverConnection/serverConnection";
import AppsIcon from '@mui/icons-material/Apps';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import ProfileSetting from "./profileSetting/ProfileSetting";

const HeaderRight = () => {
  const history = useHistory();
  const [userInfo, dispatch] = useStateValue();

  const profileImgUrl = userInfo.data.profileImgUrl;

  const handleLogout = () => {
    logout(dispatch);
    history.push("/login");
  }

  return (
    <div className="header-right">

      <ProfileSetting>
        <div className="profile-info">
          {
            (profileImgUrl && <img src={profileImgUrl} />) ||
            <PersonIcon />
          }

          <p>{userInfo.data.firstName}</p>
        </div>
      </ProfileSetting>

      <button>
        <AppsIcon />
      </button>
      <button>
        <ChatIcon />
      </button>
      <button>
        <NotificationsIcon />
      </button>
      <button onClick={() => handleLogout()}>
        <LogoutIcon />
      </button>
    </div>
  )
}

export default HeaderRight
