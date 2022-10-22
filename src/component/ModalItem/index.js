import React from "react";
import "../../styles/component/modal-item.css";

const ModalItem = (props) => {
  const { modalLabel, modalType, modalPlaceholder } = props;
  return (
    <div className="form-item">
      <label>{modalLabel}</label>
      <input
        type={modalType}
        id="url"
        name="url"
        placeholder={`${modalPlaceholder}`}
      />
    </div>
  );
};

export default ModalItem;
