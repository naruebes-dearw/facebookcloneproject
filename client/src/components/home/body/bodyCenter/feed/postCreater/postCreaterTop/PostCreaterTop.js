import "./PostCreaterTop.css";
import PersonIcon from '@mui/icons-material/Person';
import { useStateValue } from "../../../../../../../contextAPI/UserProvider";
import { postMessage } from "../../../../../../../serverConnection/serverConnection";
import { useState } from "react";
import CustomizedDialogs from "../../../../../../CustomizedDialogs/CustomizedDialogs";
import CreatePostPopup from "./createPostPopup/CreatePostPopup";
import { useCreatePostValue } from "../../../../../../../contextAPI/CreatePostProvider";

const PostCreaterTop = ({ children }) => {
  const [openCreatePost, setOpenCreatePost] = useCreatePostValue();
  const [userInfo, dispatch] = useStateValue();
  const { _id, profileImgUrl, firstName, lastName } = userInfo.data;
  const fullName = `${firstName} ${lastName}`;
  const [postText, setPostText] = useState("");
  const [postImg, setPostImg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const posterInfo = {
      ownerId: _id,
      ownerName: fullName,
      ownerProfileImgUrl: profileImgUrl,
      postTime: new Date().toString(),
      postText: postText,
      postImg: postImg,
    }
    // postMessage(posterInfo, setPosts);

    setPostText("");
    setPostImg("");
  }
  return (
    <div className="post-creater-top">
      <div className="img-container">
        {
          profileImgUrl && <img src={profileImgUrl} /> ||
          <PersonIcon fontSize="small" />
        }
      </div>

      <button
        className="modal-btn"
        variant="outlined"
        onClick={() => setOpenCreatePost(true)}
      >
        <p className="input-placeholder">What's on your mind, {firstName || "Naruebes"}?</p>
      </button>

      <CustomizedDialogs title="Create Post" useValue={useCreatePostValue}>
        <CreatePostPopup />
      </CustomizedDialogs>

      {/* <form onSubmit={handleSubmit} className="message-form">
        <input
          value={postText}
          onChange={(e) => setPostText(e.target.value)}
          type="text"
          name="message"
          placeholder={`What's on your mind, ${firstName}?`}
        /> */}
      {/* <input
          value={postImg}
          onChange={(e) => setPostImg(e.target.value)}
          type="text"
          name="imageUrl"
          placeholder="Enter Image URL"
        /> */}
      {/* <input type="submit" className="submit-btn" /> */}
      {/* </form> */}
    </div >
  )
}

export default PostCreaterTop;