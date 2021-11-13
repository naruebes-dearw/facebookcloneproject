import "./PostTitle.css";
import PersonIcon from '@mui/icons-material/Person';

const PostTitle = ({ profileImgUrl, fullName, postTime }) => {
  return (
    <div className="post-title">
      <div className="profile-img">
        {
          profileImgUrl && <img src={profileImgUrl} /> ||
          <PersonIcon fontSize="small" />
        }
      </div>

      <div className="title-info">
        <h4>{fullName}</h4>
        <p>{postTime}</p>
      </div>
    </div>
  )
}

export default PostTitle
