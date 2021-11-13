import "./HeaderRight.css";
import AppsIcon from '@mui/icons-material/Apps';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LogoutIcon from '@mui/icons-material/Logout';
import { useHistory } from "react-router";
import { useStateValue } from "../../../../contextAPI/UserProvider";
import { logout } from "../../../../serverConnection/serverConnection";
import PersonIcon from '@mui/icons-material/Person';

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
      <div className="profile-info">
        {
          (profileImgUrl && <img src={profileImgUrl} />) ||
          <PersonIcon />
        }

        <p>{userInfo.data.firstName}</p>
      </div>
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
