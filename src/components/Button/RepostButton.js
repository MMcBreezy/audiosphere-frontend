import React from "react";
import repostImage from "../../assets/repost.png";
import "./RepostButton.css";

const RepostButton = () => {
  return (
    <button
      className="repost-button"
      onClick={() => alert("RepostButton clicked!")}
    >
      <img src={repostImage} alt="Like" className="repost-button-img"/>
    </button>
  );
};

export default RepostButton;
