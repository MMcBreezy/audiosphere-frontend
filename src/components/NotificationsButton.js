import React from "react";
import Button from "./Button";
import notificationImage from "../assets/565422.png";
import "./notificationButton.css"


const NotificationsButton = () => {
  return (
    <Button
      className="notification-button"
      onClick={() => alert("NotificationButton clicked!")}
    >
      <img src={notificationImage} alt="Like" className="notification-button-img"/>
    </Button>
  );
};

export default NotificationsButton;

