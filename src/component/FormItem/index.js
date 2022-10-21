import React from "react";
import "../../styles/component/form-item.css";

const FormItem = (props) => {
  const { functionChange, label, placeholder, type } = props;
  return (
    <div className="login-register">
      <label className="title">{label}</label>
      <br />
      <input
        className="input"
        type={type}
        placeholder={placeholder}
        onChange={functionChange}
      />
    </div>
  );
};

export default FormItem;
