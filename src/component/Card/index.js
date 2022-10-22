import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/component/card.css";

const Card = (props) => {
  const { bookId, bookImage, bookTitle, bookParagraph } = props;
  const [cardListState, setCardListState] = useState("card-list");
  const changeStyle = () => {
    if (cardListState === "card-list") {
      setCardListState("card-list hover");
    } else if (cardListState === "card-list hover") {
      setCardListState("card-list");
    }
  };

  return (
    <>
      <Link
        to={`/content/${bookId}`}
        className={cardListState}
        onMouseOver={changeStyle}
        onMouseOut={changeStyle}
      >
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
