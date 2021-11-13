import "./PostCreater.css";
import PostCreaterBottom from "./postCreaterBottom/PostCreaterBottom";
import PostCreaterTop from "./postCreaterTop/PostCreaterTop";

const PostCreater = ({ setPosts }) => {
  return (
    <div className="post-creater">
      <PostCreaterTop setPosts={setPosts} />

      <PostCreaterBottom />
    </div>
  )
}

export default PostCreater
