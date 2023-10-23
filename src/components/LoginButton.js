import React from "react";
import Button from "./Button";

const LoginButton = () => {
  return (
    <Button
      className="header-button"
      onClick={() => alert("LoginButton clicked!")}
    >
      Login
    </Button>
  );
};

export default LoginButton;
