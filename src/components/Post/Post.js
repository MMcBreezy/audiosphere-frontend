import React from "react";
import profilePic from "../../assets/4299915.png";
import "./Post.css";
import LikeButton from "../Button/LikeButton";
import CommentButton from "../Button/CommentButton";
import RepostButton from "../Button/RepostButton";
import ShareButton from "../Button/ShareButton";

const Post = ({ content, embedSrc }) => {
  return (
    <div className="post-container">
      <div className="user-section">
        <img src={profilePic} alt="profile-pic" className="profile-image" />
        <span className="name">User</span>
      </div>
      <div className="content-section">
        {content && <p>{content}</p>}
        {embedSrc && (
          <div className="embed-container">
            <iframe
              className="embed-frame"
              src={embedSrc}
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        )}
      </div>
      <div className="interactions">
        <LikeButton />
        <CommentButton />
        <RepostButton />
        <ShareButton />
      </div>
    </div>
  );
};

export default Post;
