import React from "react";
import commentImage from "../../assets/comment.png";
import "./CommentButton.css";

const CommentButton = () => {
  return (
    <button
      className="comment-button"
      onClick={() => alert("CommentButton clicked!")}
    >
      <img src={commentImage} alt="Comment" className="comment-button-img"/>
    </button>
  );
};

export default CommentButton;
