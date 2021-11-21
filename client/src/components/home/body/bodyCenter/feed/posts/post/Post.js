import "./Post.css";
import PostTitle from "./postTitle/PostTitle";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import OptionBtn from "./optionBtn/OptionBtn";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import CustomizedDialogs from "../../../../../../CustomizedDialogs/CustomizedDialogs";
import EditPostPopup from "./editPostPopup/EditPostPopup";
import { useCreatePostValue } from "../../../../../../../contextAPI/CreatePostProvider";
import { useEditPostValue } from "../../../../../../../contextAPI/EditPostProvider";
import { useDeletePostValue } from "../../../../../../../contextAPI/DeletePostProvider";

const Post = (props) => {
  // const [openCreatePost, setOpenCreatePost] = useCreatePostValue();
  const [openEditPost, setOpenEditPost] = useEditPostValue();
  const [openDeletePost, setOpenDeletePost] = useDeletePostValue();
  const {
    postId,
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
        <OptionBtn color="#777" Icon={ThumbUpOffAltIcon} title="Like" />
        <OptionBtn color="#777" Icon={ChatBubbleOutlineIcon} title="Comment" />
        <OptionBtn color="#777" Icon={ShareIcon} title="Share" />
      </div>

      {
        matchUserId &&
        <div className="post-action-wrapper">
          <button
            className="post-action"
            onClick={() => {
              setOpenEditPost({
                status: true,
                data: {
                  postId,
                  profileImgUrl,
                  fullName,
                  postTime,
                  postText,
                  postImg
                }
              })
            }}
          >
            <EditOutlinedIcon fontSize="small" />
          </button>
          <button
            className="post-action"
            onClick={() => {
              setOpenDeletePost({
                status: true,
                data: {
                  postId,
                  profileImgUrl,
                  fullName,
                  postTime,
                  postText,
                  postImg
                }
              })
            }}
          >
            <DeleteOutlineOutlinedIcon fontSize="small" />
          </button>
        </div>
      }

    </div>
  )
}

export default Post
