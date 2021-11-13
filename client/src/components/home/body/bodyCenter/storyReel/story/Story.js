import "./Story.css";
import PersonIcon from '@mui/icons-material/Person';

const Story = ({ profileImgUrl, fullName, storyImg }) => {
  return (
    <div className="story">
      <img className="story-img" src={storyImg} />

      <div className="img-container">
        {
          profileImgUrl && <img src={profileImgUrl} /> ||
          <PersonIcon fontSize="small" />
        }
      </div>

      <p>{fullName}</p>
    </div>
  )
}

export default Story
