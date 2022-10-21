import React from "react";
import { Link } from "react-router-dom";
import "../../styles/component/forgot-password.css";

const ForgotPassword = () => {
  return (
    <div className="forgot-password" id="forgot-password">
      <div className="remember-me">
        <input
          type="checkbox"
          id="checkbox"
          name="checkbox"
          value="checkbox"
          className="checkbox"
        />
        <p>Remember Me</p>
      </div>
      <Link to={"/"}>Forgot Password</Link>
    </div>
  );
};

export default ForgotPassword;
