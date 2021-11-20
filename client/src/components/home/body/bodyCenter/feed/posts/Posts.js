import { useStateValue } from "../../../../../../contextAPI/UserProvider";
import Post from "./post/Post";
import "./Posts.css";

const Posts = ({ posts }) => {
  const [userInfo, dispatch] = useStateValue();
  const { _id: userId } = userInfo.data;
  return (
    <div className="posts">
      {
        posts && [...posts].reverse().map(post => {
          const {
            _id: postId,
            ownerId,
            ownerName,
            ownerProfileImgUrl,
            postTime,
            postText,
            postImg,
          } = post;

          return (
            <Post
              key={postId}
              postId={postId}
              ownerId={ownerId}
              matchUserId={userId === ownerId ? true : false}
              profileImgUrl={ownerProfileImgUrl}
              fullName={ownerName}
              postTime={postTime}
              postText={postText}
              postImg={postImg}
            />
          )
        })
      }
    </div>
  )
}

export default Posts
