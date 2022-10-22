import React from "react";
import "../../styles/component/modal.css";
import CloseButton from "../CloseButton";
import ModalButton from "../ModalButton";
import ModalItem from "../ModalItem";
import ModalTextArea from "../ModalTextArea";

const Modal = (props) => {
  const {
    modalSaveClicked,
    modalClicked,
    modalState,
    modalH5,
    modalItem1,
    modalItem2,
    modalTextArea,
    modalTypeItem1,
    modalTypeItem2,
    modalPlaceholderItem1,
    modalPlaceholderItem2,
    modalPlaceholderTextArea,
  } = props;
  return (
    <div className={modalState}>
      <div className="modal-container">
        <CloseButton modalClicked={modalClicked} />
        <h5>{modalH5}</h5>
        <form className="modal-form">
          <ModalItem
            modalLabel={modalItem1}
            modalType={modalTypeItem1}
            modalPlaceholder={modalPlaceholderItem1}
          />
          <ModalItem
            modalLabel={modalItem2}
            modalType={modalTypeItem2}
            modalPlaceholder={modalPlaceholderItem2}
          />
          <ModalTextArea
            modalLabel={modalTextArea}
            modalPlaceholder={modalPlaceholderTextArea}
          />
          <ModalButton modalClicked={modalSaveClicked} />
        </form>
      </div>
    </div>
  );
};

export default Modal;
