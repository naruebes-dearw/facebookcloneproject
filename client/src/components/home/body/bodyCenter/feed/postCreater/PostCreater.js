import "./PostCreater.css";
import PostCreaterBottom from "./postCreaterBottom/PostCreaterBottom";
import PostCreaterTop from "./postCreaterTop/PostCreaterTop";

const PostCreater = ({ children }) => {
  return (
    <div className="post-creater">
      <PostCreaterTop />
      <PostCreaterBottom />
    </div>
  )
}

export default PostCreater
