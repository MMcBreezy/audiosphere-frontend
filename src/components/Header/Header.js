// Header.js
import React from "react";
import "./Header.css";
import LoginButton from "../LoginButton";
import InboxButton from "../InboxButton";
import NotificationsButton from "../NotificationsButton";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo">AudioSphere</div>
      <div className="spacer-div"></div>
      <div className="header-buttons">
        <NotificationsButton />
        <InboxButton />
        <LoginButton />
      </div>
    </div>
  );
};

export default Header;
