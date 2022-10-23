import React, { useState } from "react";
import LoginRegisterLayout from "../../layouts/login-register-layout";
import "../../styles/primary/primary.css";
import "../../styles/pages/login.css";
import FormLogin from "../../component/FormLogin";
// import ForgotPassword from "../../component/ForgotPassword";
import PrivacyPolicy from "../../component/PrivacyPolicy";
import LogoLibrary from "../../component/LogoLibrary";
import Title from "../../component/Title";
import ForgotPassword from "../../component/ForgotPassword";
import LoginRegisterButton from "../../component/LoginRegisterButton";
// import Button from "../../component/Button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
    if (email === "windy.nathalie@gmail.com") {
      if (password === "12345678") {
        alert("Login Successful!");
        // react router dom, ada sama location
        window.location.replace("/home"); //akan mereload halaman.
      } else {
        alert("Wrong Password! Please try again!");
      }
    } else {
      alert(
        "User not found! Please enter different account or create a new one!"
      );
    }
  };

  return (
    <LoginRegisterLayout>
      <div className="wrap-login">
        <LogoLibrary />

        <div className="centering-login">
          <Title
            name={"Login"}
            textSpan1={"Login to"}
            textSpan2={"your account"}
          />

          <div className="login-box">
            <FormLogin
              emailChange={(e) => emailChange(e)}
              passwordChange={(e) => passwordChange(e)}
            />

            <ForgotPassword />

            <LoginRegisterButton
              buttonName1="Login"
              buttonName2="Signup"
              functionButton={(e) => checkUser(e)}
              linkTo1={"/home"}
              linkTo2={"/register"}
            />

            <PrivacyPolicy />
          </div>
        </div>
      </div>
    </LoginRegisterLayout>
  );
};

export default Login;
