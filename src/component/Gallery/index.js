import React from "react";
import { contentCard } from "../../data";
import "../../styles/component/gallery.css";
import GalleryCell from "../GalleryCell";

// Create the function
export function AddLibrary(urlOfTheLibrary) {
  const script = document.createElement("script");
  script.src = urlOfTheLibrary;
  script.async = true;
  document.body.appendChild(script);
}

const Gallery = () => {
  return (
    <div
      className="gallery js-flickity"
      data-flickity-options='{ "wrapAround": true }'
    >
      {contentCard.map((content) => {
        return (
          <GalleryCell
            bookId={content.bookId}
            bookTitle={content.bookTitle}
            bookImage={content.bookImage}
            bookWriter={content.bookWriter}
          />
        );
      })}

      {/* Call the function to add a library */}
      {AddLibrary("https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js")}
    </div>
  );
};

export default Gallery;
