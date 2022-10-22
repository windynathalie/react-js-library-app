import React, { useEffect, useState } from "react";
import "../../styles/component/text-content.css";

const TextContent = (props) => {
  const {
    bookCategory,
    bookName,
    releaseDate,
    bookStatus,
    bookParagraph,
    statusStyle,
  } = props;

  //Not Available Style
  const [bookStatusState, setBookStatusState] = useState("book-status");
  const checkStyle = () => {
    if (statusStyle === "Not Available") {
      setBookStatusState("book-status not-available");
    } else if (statusStyle === "Available") {
      setBookStatusState("book-status");
    }
  };

  useEffect(() => {
    checkStyle();
  });

  return (
    <div className="left-bottom-content">
      <div className="top-inner">
        <div className="left-inner">
          <p className="book-category">{bookCategory}</p>
          <h2 className="book-name">{bookName}</h2>
          <p className="release-date">{releaseDate}</p>
        </div>
        <div className="right-inner">
          <h5 className={bookStatusState}>{bookStatus}</h5>
        </div>
      </div>
      <div className="bottom-inner">
        <p>{bookParagraph}</p>
      </div>
    </div>
  );
};

export default TextContent;
