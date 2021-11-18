import "./BodyCenter.css";
import StoryReel from "./storyReel/StoryReel";
import Feed from "./feed/Feed";
import { PostMessageProvider } from "../../../../contextAPI/PostMessageProvider";

const BodyCenter = () => {
  return (
    <div className="body-center">
      <StoryReel />
      <PostMessageProvider>
        <Feed />
      </PostMessageProvider>
    </div>
  )
}

export default BodyCenter;