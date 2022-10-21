import React, { useState } from "react";

import "../../styles/primary/primary.css";
import "../../styles/pages/content.css";

import Bar from "../../component/Bar";
import TopImage from "../../component/TopImage";
import BookCover from "../../component/BookCover";
import TextContent from "../../component/TextContent";
import Button from "../../component/Button";
import Modal from "../../component/Modal";
import DeleteModal from "../../component/DeleteModal";

import { useParams } from "react-router-dom";
import { contentCard } from "../../data";

const Content = () => {
  const { bookId } = useParams();

  const firstMatch = contentCard.find(
    (title) => title.bookId === parseInt(bookId)
  );

  // Edit Book
  const [addBookState, setAddBookState] = useState("modal hidden-modal");
  const addBookClicked = (e) => {
    e.preventDefault();
    if (addBookState === "modal hidden-modal") {
      setAddBookState("modal");
    } else if (addBookState === "modal") {
      setAddBookState("modal hidden-modal");
    }
  };

  // Delete Book
  const [deleteBookState, setDeleteBookState] = useState(
    "delete-modal hidden-modal"
  );
  const deleteBookClicked = (e) => {
    e.preventDefault();
    if (deleteBookState === "delete-modal hidden-modal") {
      setDeleteBookState("delete-modal");
    } else if (deleteBookState === "delete-modal") {
      setDeleteBookState("delete-modal hidden-modal");
    }
  };

  return (
    <div className="wrapper">
      <div className="top-side-content">
        <TopImage imageSrc={firstMatch.bookImage} />
        <Bar modalClicked={addBookClicked} deleteClicked={deleteBookClicked} />
        <BookCover bookCover={firstMatch.bookCover} />
      </div>

      <div className="bottom-side-content">
        <TextContent
          bookCategory={firstMatch.bookCategory}
          bookName={firstMatch.bookTitle}
          releaseDate={firstMatch.bookReleased}
          bookStatus={firstMatch.bookStatus}
          bookParagraph={firstMatch.bookParagraph}
        />
        <Button />
      </div>

      <Modal
        modalClicked={addBookClicked}
        modalState={addBookState}
        modalH5="Add Data"
        modalItem1="Url Image"
        modalItem2="Title"
        modalTextArea="Description"
        modalTypeItem1="url"
        modalTypeItem2="text"
        modalPlaceholderItem1={firstMatch.bookImage}
        modalPlaceholderItem2={firstMatch.bookTitle}
        modalPlaceholderTextArea={firstMatch.bookParagraph}
      />

      <DeleteModal
        bookName={firstMatch.bookTitle}
        modalClicked={deleteBookClicked}
        modalState={deleteBookState}
      />
    </div>
  );
};

export default Content;
