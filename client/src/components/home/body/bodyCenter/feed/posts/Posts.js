import Post from "./post/Post";
import "./Posts.css";

const Posts = ({ posts }) => {
  return (
    <div className="posts">
      {
        posts && [...posts].reverse().map(post => {
          const {
            _id,
            ownerName,
            ownerProfileImgUrl,
            postTime,
            postText,
            postImg,
          } = post;

          return (
            <Post
              key={_id}
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
