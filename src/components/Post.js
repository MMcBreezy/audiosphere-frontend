import React from "react";
import profilePic from "../assets/4299915.png";
import "./post.css";

const Post = () => {
  return (
    <div className="post-container">
      <div className="user-section">
        <img
          src={profilePic}
          alt="profile-pic"
          className="profile-image"
        />
        <div className="name">User</div>
      </div>
      <div className="content-section">Content</div>
      <div className="buttons-section">Buttons</div>
      <div className="comments-section">Comments</div>
    </div>
  );
};

export default Post;
