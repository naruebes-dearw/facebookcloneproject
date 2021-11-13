import "./StoryReel.css";
import Story from "./story/Story";
import usersExample from "../../bodyCenter/storyReel/usersExample";
import { useEffect } from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const StoryReel = () => {
  const { profileImgUrl, fullName, storyImg } = usersExample[0];
  return (
    <div className="story-reel">
      {
        usersExample.map(user => {
          const { profileImgUrl, fullName, storyImg } = user;
          return (
            <Story fullName={fullName} profileImgUrl={profileImgUrl} storyImg={storyImg} />
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
