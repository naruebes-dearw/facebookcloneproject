import OptionBtn from "./optionBtn/OptionBtn";
import "./PostCreaterBottom.css";
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';

const PostCreaterBottom = () => {
  return (
    <div className="post-creater-bottom">
      <OptionBtn color="red" Icon={VideoCameraFrontIcon} title="Live Video" />
      <OptionBtn color="green" Icon={PhotoLibraryIcon} title="Photo/Video" />
      <OptionBtn color="orange" Icon={InsertEmoticonIcon} title="Feeling/Activity" />
    </div>
  )
}

export default PostCreaterBottom
