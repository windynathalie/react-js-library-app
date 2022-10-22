import React, { useEffect, useState } from "react";
import "../../styles/component/button.css";

const Button = (props) => {
  const { statusStyle } = props;

  //Not Available Style
  const [buttonStatusState, setButtonStatusState] = useState("borrow-button");
  const [textState, setTextState] = useState("Borrow");
  const checkStyle = () => {
    if (statusStyle === "Not Available") {
      setButtonStatusState("borrow-button not-avail");
      setTextState("Out of Stock");
    } else if (statusStyle === "Available") {
      setButtonStatusState("borrow-button");
      setTextState("Borrow");
    }
  };

  useEffect(() => {
    checkStyle();
  });

  return (
    <div className="right-bottom-content">
      <button className={buttonStatusState}>{textState}</button>
    </div>
  );
};

export default Button;
