import { useEffect, useState } from "react";
import { getPosts } from "../../../../../../serverConnection/serverConnection";
import Post from "./post/Post";
import "./Posts.css";

const Posts = ({ posts }) => {
  const profileImgUrl = "https://image.freepik.com/free-photo/portrait-beautiful-young-woman_23-2147892776.jpg";
  const postImg = "https://image.freepik.com/free-photo/blue-morning-natural-mountains-bamboo_1417-32.jpg";
  const fullName = "Elizabeth Iles";
  const postTime = new Date().toString().substring(0, 24);
  const postText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus gravida nunc eget blandit. Duis dui nisl, gravida eu vulputate ut, tristique eu enim.";

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
