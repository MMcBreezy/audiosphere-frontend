import React from "react";

const NavMenu = ({ isOpen, onClose }) => {
  return (
    <div className={`hamburger-menu ${isOpen ? "open" : ""}`}>
      <div className="menu-header">
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
      <ul className="menu-list">
        <li>Feed (landing page)</li>
        <li>Account/Activity</li>
        <li>Artists Followed</li>
        <li>Live on Sphere (broadcast)</li>
        <li>Fan Club</li>
        <li>Media Vault</li>
        <li>Wall/Donations</li>
        <li>Store</li>
        <li>Tour</li>
        <li>News</li>
        <li>Messages</li>
        <li>Sign-in/Logout</li>
      </ul>
    </div>
  );
};

export default NavMenu;
