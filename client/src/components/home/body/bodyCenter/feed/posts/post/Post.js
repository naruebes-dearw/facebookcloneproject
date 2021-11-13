import "./Post.css";
import PostTitle from "./postTitle/PostTitle";
import PostOption from "./postOption/PostOption";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import OptionBtn from "./optionBtn/OptionBtn";

const Post = (props) => {
  const {
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
        <img src={postImg} />
      </div>
      <div className="post-option">
        <OptionBtn color="grey" Icon={ThumbUpOffAltIcon} title="Like" />
        <OptionBtn color="grey" Icon={ChatBubbleOutlineIcon} title="Comment" />
        <OptionBtn color="grey" Icon={ShareIcon} title="Share" />
      </div>
    </div>
  )
}

export default Post
