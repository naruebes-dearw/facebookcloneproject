// import axios from "axios";
// import { useEffect } from "react";
// import { useHistory } from "react-router";
// import { useStateValue } from "../../contextAPI/UserProvider";
// import { logout } from "../../serverConnection/serverConnection";
// import { SERVER_LOGOUT_URL } from "../../serverConnection/serverUrl";
import Body from "./body/Body";
import Header from "./header/Header";
import "./Home.css";

const Home = () => {
  // const [userInfo, dispatch] = useStateValue();
  // const history = useHistory();
  console.log("code beautify 2");

  return (
    <div className="home">
      <Header />
      <Body />
    </div>
  )
}

export default Home;

/* Home page
<button onClick={handleLogout}>Logout</button>
<h1>
  {`wellcome : ${userInfo.data.displayName || userInfo.data.username}`}
</h1>
<h3>FullName : {userInfo.data.fullName || userInfo.data.username}</h3>
<img src={userInfo.data.profileImgUrl} /> */