import React from "react";
import "../../styles/component/book-cover.css";

const BookCover = (props) => {
  const { bookCover } = props;
  return (
    <div className="book-cover">
      <img src={bookCover} alt="" />;
    </div>
  );
};

export default BookCover;
