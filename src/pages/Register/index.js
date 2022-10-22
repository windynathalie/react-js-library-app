import React, { useState } from "react";
import LoginRegisterLayout from "../../layouts/login-register-layout";
import "../../styles/primary/primary.css";
import "../../styles/pages/register.css";
import LogoLibrary from "../../component/LogoLibrary";
import Title from "../../component/Title";
import FormRegister from "../../component/FormRegister";
import PrivacyPolicy from "../../component/PrivacyPolicy";
import LoginRegisterButton from "../../component/LoginRegisterButton";

const Register = () => {
  const [username, setUsername] = useState("");
  const [fullName, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const usernameChange = (e) => {
    e.preventDefault();
    setUsername(e.target.value);
  };

  const fullnameChange = (e) => {
    e.preventDefault();
    setFullname(e.target.value);
  };

  const emailChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const passwordChange = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const checkUser = (e) => {
    e.preventDefault();
    if (!username || !fullName || !email || !password) {
      alert("Please complete your data");
    } else if (
      !String(email)
        .toLowerCase()
        .match(
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        )
    ) {
      alert("Please enter you email address in format yourname@example.domain");
    } else if (password.length < 8) {
      alert("Please input password be at least 8 character long");
    } else if (username && fullName && email && password) {
      alert("Account successfully created!");
      window.location.replace("/home");
    }
  };

  return (
    <LoginRegisterLayout>
      <div className="wrap-register">
        <LogoLibrary />

        <div className="centering-register">
          <Title name={"Register"} />

          <div className="register-box">
            <FormRegister
              usernameChange={(e) => usernameChange(e)}
              fullnameChange={(e) => fullnameChange(e)}
              emailChange={(e) => emailChange(e)}
              passwordChange={(e) => passwordChange(e)}
            />

            <LoginRegisterButton
              buttonName1="Sign up"
              buttonName2="Login"
              functionButton={(e) => checkUser(e)}
              linkTo1={"/home"}
              linkTo2={"/"}
            />

            <PrivacyPolicy />
          </div>
        </div>
      </div>
    </LoginRegisterLayout>
  );
};

export default Register;
