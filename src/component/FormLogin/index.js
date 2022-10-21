import "../../styles/component/form-login.css";
import React from "react";
import FormItem from "../FormItem";

const FormLogin = (props) => {
  const { emailChange, passwordChange } = props;
  return (
    <>
      <form className="form-login">
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

export default FormLogin;
