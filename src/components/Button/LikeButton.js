import React from "react";
import likeImage from "../../assets/like-button.png";
import "./LikeButton.css";

const LikeButton = () => {
  return (
    <button
      className="like-button"
      onClick={() => alert("LikeButton clicked!")}
    >
      <img src={likeImage} alt="Like" className="like-button-img"/>
    </button>
  );
};

export default LikeButton;
