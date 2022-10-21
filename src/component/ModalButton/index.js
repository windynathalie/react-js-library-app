import React from "react";
import "../../styles/component/modal-button.css";

const ModalButton = (props) => {
  const { modalClicked } = props;
  return (
    <button onClick={modalClicked} className="btn">
      Save
    </button>
  );
};

export default ModalButton;
