import React from "react";
import { Link } from "react-router-dom";
import "../../styles/component/gallery-cell.css";

const GalleryCell = (props) => {
  const { bookId, bookImage, bookTitle, bookWriter } = props;
  return (
    <div className="gallery-cell">
      <Link to={`/content/${bookId}`}>
        <div
          className="gallery-container"
          id="images-1"
          style={{ backgroundImage: `url(${bookImage})` }}
        >
          <div className="text-background">
            <h3>{bookTitle}</h3>
            <p>{bookWriter}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default GalleryCell;
