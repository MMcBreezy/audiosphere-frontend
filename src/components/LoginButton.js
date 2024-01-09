import React from "react";
import "./loginButton.css";

const LoginButton = () => {
  return (
    <button
      className="login-button"
      onClick={() => alert("LoginButton clicked!")}
    >
      <span>Login</span>
    </button>
  );
};

export default LoginButton;
