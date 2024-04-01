import React from "react";
import commentImage from "../../assets/comment.png";
import "./CommentButton.css";

const CommentButton = ({ onClick }) => {
  return (
    <button className="comment-button" onClick={onClick}>
      <img src={commentImage} alt="Comment" className="comment-button-img" />
    </button>
  );
};

export default CommentButton;
