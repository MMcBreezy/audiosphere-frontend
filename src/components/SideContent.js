import React from "react";
import profilePic from "../assets/4299915.png";
import "./sideContent.css";

const SideContent = () => {
  return (
    <div className="side-container">
      <div className="greeting">
        Hi <span className="userName">User</span>,
        <p className="greeting-message">
          Here is some content related to your account!
        </p>
      </div>
      <div className="suggest-follow-section">
        <span className="suggest-follow-section-title">Suggested artists:</span>
        <div className="profiles">
          <img
            src={profilePic}
            alt="profile-pic"
            className="suggest-follow-profile-image"
          />
          <img
            src={profilePic}
            alt="profile-pic"
            className="suggest-follow-profile-image"
          />
          <img
            src={profilePic}
            alt="profile-pic"
            className="suggest-follow-profile-image"
          />
          <img
            src={profilePic}
            alt="profile-pic"
            className="suggest-follow-profile-image"
          />
          <img
            src={profilePic}
            alt="profile-pic"
            className="suggest-follow-profile-image"
          />
        </div>
      </div>
    </div>
  );
};

export default SideContent;
