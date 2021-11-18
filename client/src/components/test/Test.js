import { useEffect } from "react";
import { useStateValue } from "../../contextAPI/UserProvider";
import axios from "axios";
import { SERVER_HOME_URL } from "../../serverConnection/serverUrl";
import { getUser } from "../../serverConnection/serverConnection";
import "./Test.css";
import CreatePostPopup from "../createPostPopup/CreatePostPopup";
import CustomizedDialogs from "../CustomizedDialogs/CustomizedDialogs";
import { CreatePostProvider } from "../../contextAPI/CreatePostProvider";

const Test = () => {
  const [userInfo, dispatch] = useStateValue();

  useEffect(() => {
    getUser(dispatch);
  }, []);

  return (
    <div className="test">
      Test page

      <CreatePostProvider>
        <CustomizedDialogs title="Create Post">
          <CreatePostPopup />
        </CustomizedDialogs>
      </CreatePostProvider>
    </div>
  );
}

export default Test;