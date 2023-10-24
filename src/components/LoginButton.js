import React from "react";
import "./loginButton.css";

const LoginButton = () => {
  return (
    <button
      className="login-button"
      onClick={() => alert("LoginButton clicked!")}
    >
      Login
    </button>
  );
};

export default LoginButton;
