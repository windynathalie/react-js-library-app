import React from "react";
import "../../styles/component/modal-text-area.css";

const ModalTextArea = (props) => {
  const { modalLabel, modalPlaceholder } = props;
  return (
    <div className="text-area">
      <label>{modalLabel}</label>
      <br />
      <textarea
        onfocusout="onFocusOutForm('description')"
        name="description"
        id="description"
        placeholder={`${modalPlaceholder}`}
        form="usrform"
        rows="5"
      ></textarea>
      <br />
    </div>
  );
};

export default ModalTextArea;
