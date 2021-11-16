import "./StoryReel.css";
import Story from "./story/Story";
import usersExample from "../../bodyCenter/storyReel/usersExample";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const StoryReel = () => {
  return (
    <div className="story-reel">
      {
        usersExample.map(user => {
          const { id, profileImgUrl, fullName, storyImg } = user;
          return (
            <Story key={id} fullName={fullName} profileImgUrl={profileImgUrl} storyImg={storyImg} />
          )
        })
      }

      <div className="other-story">
        <ArrowForwardIcon />
      </div>
    </div>
  )
}

export default StoryReel
