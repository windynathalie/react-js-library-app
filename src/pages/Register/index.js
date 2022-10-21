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
    // console.log(e.target.value, "event");
    // console.log(e.target, "event");
  };

  const fullnameChange = (e) => {
    e.preventDefault();
    setFullname(e.target.value);
    // console.log(e.target.value, "event");
    // console.log(e.target, "event");
  };

  const emailChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
    // console.log(e.target.value, "event");
    // console.log(e.target, "event");
  };

  const passwordChange = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
    // console.log(e.target.value, "event");
    // console.log(e.target, "event");
  };

  const checkUser = (e) => {
    e.preventDefault();
    if (username && fullName && email && password) {
      alert("Account successfully created!");
      // react router dom, ada sama location
      window.location.replace("/home"); //akan mereload halaman.
    } else if (!username || !fullName || !email || !password) {
      alert("Please complete your data");
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
