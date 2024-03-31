// Header.js
import React, { useState } from "react";
import "./Header.css";
import LoginButton from "../LoginButton";
import InboxButton from "../InboxButton";
import NotificationsButton from "../NotificationsButton";
import NavMenu from "./NavMenu";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header-container">
      <div className="logo">AudioSphere</div>
      <div className="spacer-div"></div>
      <div className="header-buttons">
        <NotificationsButton />
        <InboxButton />
        <LoginButton />
        <button className="hamburger-btn" onClick={toggleMenu}>
          ☰
        </button>
        <NavMenu isOpen={menuOpen} onClose={toggleMenu} />
      </div>
    </div>
  );
};

export default Header;
