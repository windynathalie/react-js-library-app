import React from "react";
import "../../styles/component/close-button.css";

const CloseButton = (props) => {
  const { modalClicked } = props;
  return (
    <button onClick={modalClicked} className="close">
      <i className="fa fa-close close"></i>
    </button>
  );
};

export default CloseButton;
