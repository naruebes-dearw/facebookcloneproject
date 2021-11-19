import "./Post.css";
import PostTitle from "./postTitle/PostTitle";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import OptionBtn from "./optionBtn/OptionBtn";
import EditIcon from '@mui/icons-material/Edit';
import CustomizedDialogs from "../../../../../../CustomizedDialogs/CustomizedDialogs";
import EditPostPopup from "./editPostPopup/EditPostPopup";
import { useCreatePostValue } from "../../../../../../../contextAPI/CreatePostProvider";
import { useEditPostValue } from "../../../../../../../contextAPI/EditPostProvider";

const Post = (props) => {
  // const [openCreatePost, setOpenCreatePost] = useCreatePostValue();
  const [openEditPost, setOpenEditPost] = useEditPostValue();
  const {
    ownerId,
    matchUserId,
    profileImgUrl,
    fullName,
    postTime,
    postText,
    postImg
  } = props;
  return (
    <div className="post">
      <PostTitle
        profileImgUrl={profileImgUrl}
        fullName={fullName}
        postTime={postTime.toString().substring(0, 21)}
      />
      <p className="post-text">{postText}</p>
      <div className="post-img">
        <img src={postImg} onError={e => e.target.src = ""} />
      </div>
      <div className="post-option">
        <OptionBtn color="grey" Icon={ThumbUpOffAltIcon} title="Like" />
        <OptionBtn color="grey" Icon={ChatBubbleOutlineIcon} title="Comment" />
        <OptionBtn color="grey" Icon={ShareIcon} title="Share" />
      </div>

      {
        matchUserId && <button onClick={() => {
          setOpenEditPost({
            status: true,
            data: {
              profileImgUrl,
              fullName,
              postTime,
              postText,
              postImg
            }
          })
        }}>
          <EditIcon />
        </button>
      }

    </div>
  )
}

export default Post
