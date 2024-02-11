import React from "react";
import profilePic from "../../assets/4299915.png";
import "./Post.css";
import LikeButton from "../Button/LikeButton";
import CommentButton from "../Button/CommentButton";
import RepostButton from "../Button/RepostButton";
import ShareButton from "../Button/ShareButton";

const Post = () => {
  return (
    <div className="post-container">
      <div className="user-section">
        <img src={profilePic} alt="profile-pic" className="profile-image" />
        <span className="name">User</span>
      </div>
      <div className="content-section">Content</div>
      <div>
        <LikeButton />
        <CommentButton />
        <RepostButton />
        <ShareButton />
      </div>
    </div>
  );
};

export default Post;
