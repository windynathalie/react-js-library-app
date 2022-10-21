import React from "react";
import "../../styles/component/text-content.css";

const TextContent = (props) => {
  const { bookCategory, bookName, releaseDate, bookStatus, bookParagraph } =
    props;
  return (
    <div className="left-bottom-content">
      <div className="top-inner">
        <div className="left-inner">
          <p className="book-category">{bookCategory}</p>
          <h2 className="book-name">{bookName}</h2>
          <p className="release-date">{releaseDate}</p>
        </div>
        <div className="right-inner">
          <h5 className="book-status">{bookStatus}</h5>
        </div>
      </div>
      <div className="bottom-inner">
        <p>{bookParagraph}</p>
      </div>
    </div>
  );
};

export default TextContent;
