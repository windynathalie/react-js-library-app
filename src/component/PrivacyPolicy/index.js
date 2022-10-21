import React from "react";
import { Link } from "react-router-dom";
import "../../styles/component/privacy-policy.css";

const PrivacyPolicy = () => {
  return (
    <div className="login-description">
      <p>
        By clicking up, you agree to Book's <br />
        <span>
          <Link to={"/"}>Terms and Condition</Link>
        </span>{" "}
        &
        <span>
          <Link to={"/"}> Privacy Policy</Link>
        </span>
      </p>
    </div>
  );
};

export default PrivacyPolicy;
