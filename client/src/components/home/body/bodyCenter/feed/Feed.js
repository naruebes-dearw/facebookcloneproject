import "./Feed.css";
import { useEffect, useState } from "react";
import { getPosts } from "../../../../../serverConnection/serverConnection";
import PostCreater from "./postCreater/PostCreater";
import Posts from "./posts/Posts";

const Feed = () => {
  const [posts, setPosts] = useState("");
  useEffect(() => {
    getPosts(setPosts);
  }, [])

  return (
    <div className="feed">
      <PostCreater setPosts={setPosts} />
      <Posts posts={posts} />
    </div>
  )
}

export default Feed
