import "./Feed.css";
import { createContext, useEffect, useState } from "react";
import { getPosts } from "../../../../../serverConnection/serverConnection";
import PostCreater from "./postCreater/PostCreater";
import Posts from "./posts/Posts";
// import CreatePostPopup from "../../../../createPostPopup/CreatePostPopup";
// import CustomizedDialogs from "../../../../CustomizedDialogs/CustomizedDialogs";
import { CreatePostProvider } from "../../../../../contextAPI/CreatePostProvider";
import { usePostMessageValue } from "../../../../../contextAPI/PostMessageProvider";
import CustomizedDialogs from "../../../../CustomizedDialogs/CustomizedDialogs";
import EditPostPopup from "./posts/post/editPostPopup/EditPostPopup";
import { EditPostProvider, useEditPostValue } from "../../../../../contextAPI/EditPostProvider";


const Feed = () => {
  const [posts, setPosts] = usePostMessageValue();
  // const [posts, setPosts] = useState("");
  useEffect(() => {
    getPosts(setPosts);
  }, [])

  return (
    <div className="feed">
      <CreatePostProvider>
        <PostCreater />
      </CreatePostProvider>

      <EditPostProvider>
        <CustomizedDialogs title="Edit Post" useValue={useEditPostValue}>
          <EditPostPopup />
        </CustomizedDialogs>
        <Posts posts={posts} />
      </EditPostProvider>
    </div>
  )
}

export default Feed
