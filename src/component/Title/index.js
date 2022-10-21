import React from "react";
import "../../styles/component/title.css";

const Title = (props) => {
  const { name } = props;
  return (
    <>
      <div className="login-title">
        <h1 className="h1">{name}</h1>
        <p className="p">
          Welcome back, Please <span className="text">{name}</span> to
          <br />
          your account
        </p>
      </div>
    </>
  );
};

export default Title;
