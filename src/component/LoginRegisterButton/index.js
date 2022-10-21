import React from "react";
import { Link } from "react-router-dom";
import "../../styles/component/login-register.css";

const LoginRegisterButton = (props) => {
  const { buttonName1, buttonName2, functionButton, linkTo1, linkTo2 } = props;
  return (
    <div className="button-login">
      <Link to={linkTo1}>
        <button className="button login" onClick={functionButton}>
          {buttonName1}
        </button>
      </Link>
      <Link to={linkTo2}>
        <button className="button signup">{buttonName2}</button>
      </Link>
    </div>
  );
};

export default LoginRegisterButton;
