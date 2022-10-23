import React from "react";
import "../../styles/component/title.css";

const Title = (props) => {
  const { name, textSpan1, textSpan2 } = props;
  return (
    <>
      <div className="login-title">
        <h1 className="h1">{name}</h1>
        <p className="p">
          Welcome back, Please <span className="text">{textSpan1}</span>
          <br />
          <span>{textSpan2}</span>
        </p>
      </div>
    </>
  );
};

export default Title;
