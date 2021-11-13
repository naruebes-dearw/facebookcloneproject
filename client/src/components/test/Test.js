import { useEffect } from "react";
import { useStateValue } from "../../contextAPI/UserProvider";
import axios from "axios";
import { SERVER_HOME_URL } from "../../serverConnection/serverUrl";
import { getUser } from "../../serverConnection/serverConnection";

const Test = () => {
  const [userInfo, dispatch] = useStateValue();

  useEffect(() => {
    getUser(dispatch);
  }, []);

  const data = {
    user: {
      displayName: "Dearw",
      photoURL: "www.google.com"
    }
  }

  return (
    <div>
      Test page
      <button onClick={() => dispatch({
        type: "USER_LOGIN",
        payload: data
      })}
      >
        Login
      </button>
      <button onClick={() => dispatch({
        type: "USER_LOGOUT"
      })}
      >
        Logout
      </button>
      {console.log(userInfo)}
    </div>
  );
}

export default Test;