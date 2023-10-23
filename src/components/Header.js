// Header.js
import React from "react";
import "./styles.css";
import LoginButton from "./LoginButton";
import InboxButton from "./InboxButton";
import NotificationsButton from "./NotificationsButton";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="logo">AudioSphere</div>
        <div className="header-buttons">
          <LoginButton />
          <InboxButton />
          <NotificationsButton />
          {/* Add more buttons here */}
        </div>
      </div>
    </header>
  );
};

export default Header;
