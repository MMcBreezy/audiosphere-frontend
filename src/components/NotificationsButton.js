import React from "react";
import Button from "./Button";

const NotificationsButton = () => {
  return (
    <Button
      className="header-button"
      onClick={() => alert("NotificationButton clicked!")}
    >
      Notifications
    </Button>
  );
};

export default NotificationsButton;

