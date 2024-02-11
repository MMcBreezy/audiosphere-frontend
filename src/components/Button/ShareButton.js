import React from "react";
import shareImage from "../../assets/share.png";
import "./ShareButton.css";

const ShareButton = () => {
  return (
    <button
      className="share-button"
      onClick={() => alert("ShareButton clicked!")}
    >
      <img src={shareImage} alt="Like" className="share-button-img"/>
    </button>
  );
};

export default ShareButton;
