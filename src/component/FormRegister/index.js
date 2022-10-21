import React from "react";
import "../../styles/component/form-register.css";
import FormItem from "../FormItem";

const FormRegister = (props) => {
  const { usernameChange, fullnameChange, emailChange, passwordChange } = props;
  return (
    <>
      <form className="form-login">
        <FormItem
          functionChange={usernameChange}
          label="Username"
          placeholder="Windy"
          type="text"
        />
        <FormItem
          functionChange={fullnameChange}
          label="Full Name"
          placeholder="Windy Nathalie Ong"
          type="text"
        />
        <FormItem
          functionChange={emailChange}
          label="Email Address"
          placeholder="windy.nathalie@gmail.com"
          type="email"
        />
        <FormItem
          functionChange={passwordChange}
          label="Password"
          placeholder="******"
          type="password"
        />
      </form>
    </>
  );
};

export default FormRegister;
