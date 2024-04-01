import React, { useState } from "react";
import profilePic from "../../assets/4299915.png";
import "./Post.css";
import LikeButton from "../Button/LikeButton";
import CommentButton from "../Button/CommentButton";
import RepostButton from "../Button/RepostButton";
import ShareButton from "../Button/ShareButton";

const Post = ({ postId, content, embedSrc, comments = [], addComment }) => {
  const [newComment, setNewComment] = useState("");
  const [showComments, setShowComments] = useState(false);

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      addComment(postId, newComment);
      setNewComment("");
      setShowComments(true); // Show comments when a new comment is added
    }
  };

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
        <CommentButton onClick={() => setShowComments(!showComments)} />
        <RepostButton />
        <ShareButton />
      </div>
      {showComments && (
        <div className="comments-section">
          <h3>Comments</h3>
          <ul className="comments-list">
            {comments.map((comment, index) => (
              <li key={index} className="comment-item">
                <img
                  src={profilePic}
                  alt="profile-pic"
                  className="comment-profile-image"
                />
                <div className="comment-content">
                  <span className="comment-author">User</span>
                  <p className="comment-text">{comment}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="add-comment">
            <input
              type="text"
              placeholder="Add a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <button onClick={handleAddComment}>Comment</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;
