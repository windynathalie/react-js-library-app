import React from "react";
import { Link } from "react-router-dom";
import "../../styles/component/card.css";

const Card = (props) => {
  const { bookId, bookImage, bookTitle, bookParagraph } = props;
  return (
    <>
      <Link to={`/content/${bookId}`} className="card-list">
        <img src={bookImage} alt="card-1" />
        <div className="text-card">
          <h6 className="card-name" id="card-one">
            {bookTitle}
          </h6>
          <p>{bookParagraph}</p>
        </div>
      </Link>
    </>
  );
};

export default Card;
