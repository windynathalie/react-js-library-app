import React from "react";
import "../../styles/component/delete-modal.css";
import CloseButton from "../CloseButton";
import Image from "../../image/checked.png";

const DeleteModal = (props) => {
  const { bookName, modalClicked, modalState } = props;
  return (
    <div className={modalState}>
      <div className="delete-container">
        <CloseButton modalClicked={modalClicked} />
        <div className="delete-content">
          <img src={Image} alt="checked" />
          <p>
            Data <span>{bookName}</span> berhasil dihapus!
          </p>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
