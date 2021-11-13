import "./BodyCenter.css";
import StoryReel from "./storyReel/StoryReel";
import Feed from "./feed/Feed";

const BodyCenter = () => {
  return (
    <div className="body-center">
      <StoryReel />
      <Feed />
    </div>
  )
}

export default BodyCenter;