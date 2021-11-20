import "./DeletePostPopup.css";
import CloseIcon from '@mui/icons-material/Close';
import PublicIcon from '@mui/icons-material/Public';
import PersonIcon from '@mui/icons-material/Person';
import { useEffect, useState } from "react";
import { usePostMessageValue } from "../../../../../../../../contextAPI/PostMessageProvider";
import { useStateValue } from "../../../../../../../../contextAPI/UserProvider";
import { deletePost, editPost, postMessage } from "../../../../../../../../serverConnection/serverConnection";
import { useCreatePostValue } from "../../../../../../../../contextAPI/CreatePostProvider";
import { useEditPostValue } from "../../../../../../../../contextAPI/EditPostProvider";
import { useDeletePostValue } from "../../../../../../../../contextAPI/DeletePostProvider";

const DeletePostPopup = () => {
  const [posts, setPosts] = usePostMessageValue();
  // const [openEditPost, setOpenEditPost] = useEditPostValue();
  // const [openCreatePost, setOpenCreatePost] = useCreatePostValue();
  const [openDeletePost, setOpenDeletePost] = useDeletePostValue();
  const [userInfo, dispatch] = useStateValue();
  const { _id, profileImgUrl, firstName, lastName } = userInfo.data;
  const fullName = `${firstName} ${lastName}`;
  const [postText, setPostText] = useState("");
  const [postImg, setPostImg] = useState("");

  const createPost = async (e) => {
    // const posterInfo = {
    //   postId: openDeletePost.data.postId,
    //   ownerId: _id,
    //   ownerName: fullName,
    //   ownerProfileImgUrl: profileImgUrl,
    //   postTime: new Date().toString(),
    //   postText: postText,
    //   postImg: postImg,
    // }
    const { postId } = openDeletePost.data;
    deletePost(postId, setPosts);

    setOpenDeletePost(false);
  }

  return (
    <div className="edit-post">
      <p>Are you sure to delete?</p>

      <div className="btns">
        <button onClick={() => setOpenDeletePost(false)} className="cancle-btn btn">Cancle</button>
        <button onClick={createPost} className="confirm-btn btn">Delete</button>
      </div>
    </div>
  )
}

export default DeletePostPopup;

