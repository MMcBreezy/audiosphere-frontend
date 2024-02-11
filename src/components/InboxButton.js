import React from "react";
import Button from "./Button/Button";

const InboxButton = () => {
  return (
    <Button
      className="header-button"
      onClick={() => alert("InboxButton clicked!")}
    >
      Inbox
    </Button>
  );
};

export default InboxButton;
