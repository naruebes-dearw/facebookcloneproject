import "./CreatePostPopup.css";
import CloseIcon from '@mui/icons-material/Close';
import PublicIcon from '@mui/icons-material/Public';
import PersonIcon from '@mui/icons-material/Person';
import { useState } from "react";
import { useStateValue } from "../../contextAPI/UserProvider";
import { postMessage } from "../../serverConnection/serverConnection";
import { useCreatePostValue } from "../../contextAPI/CreatePostProvider";
import { usePostMessageValue } from "../../contextAPI/PostMessageProvider";

const CreatePostPopup = () => {
  const [posts, setPosts] = usePostMessageValue();
  const [openCreatePost, setOpenCreatePost] = useCreatePostValue();
  const [userInfo, dispatch] = useStateValue();
  const { _id, profileImgUrl, firstName, lastName } = userInfo.data;
  const fullName = `${firstName} ${lastName}`;
  const [postText, setPostText] = useState("");
  const [postImg, setPostImg] = useState("");

  const createPost = async (e) => {
    const posterInfo = {
      ownerId: _id,
      ownerName: fullName,
      ownerProfileImgUrl: profileImgUrl,
      postTime: new Date().toString(),
      postText: postText,
      postImg: postImg,
    }
    postMessage(posterInfo, setPosts);

    setPostText("");
    setPostImg("");

    setOpenCreatePost(false);
  }

  return (
    <div className="create-post">
      <div className="poster-info">
        <div className="profile-img">
          {
            profileImgUrl && <img src={profileImgUrl} /> ||
            <PersonIcon fontSize="small" />
          }
        </div>

        <div className="title-info">
          <h4>{fullName === " " ? "Full Name afsdfasdfasdfasdf" : fullName}</h4>
          <div className="public-icon-container">
            <PublicIcon style={{ fontSize: "14" }} />
            <p style={{ color: "black" }}>Public</p>
          </div>
        </div>
      </div>

      <textarea
        autoFocus
        placeholder={`What's on your mind, ${firstName}?`}
        value={postText}
        onChange={e => {
          e.target.style.height = 'inherit';
          e.target.style.height = `${e.target.scrollHeight + 3}px`;
          setPostText(e.target.value)
        }}
      />

      <div className="img-wrapper">
        {postImg && <img src={postImg} />}
      </div>

      <input
        className="image-url"
        placeholder="Enter Image URL"
        value={postImg}
        onChange={(e) => setPostImg(e.target.value)}
      />

      <button onClick={createPost}>Post</button>
    </div>
  )
}

export default CreatePostPopup
