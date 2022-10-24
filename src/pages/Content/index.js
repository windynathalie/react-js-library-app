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
import swal from "sweetalert";

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
      swal("Are you sure you want to edit book data?", {
        buttons: {
          cancel: "No",
          catch: {
            text: "Yes",
            value: "catch",
            className: "swal-yes",
          },
        },
      }).then((value) => {
        switch (value) {
          case "catch":
            setAddBookState("modal");
            break;

          default:
            setAddBookState("modal hidden-modal");
        }
      });
    } else if (addBookState === "modal") {
      setAddBookState("modal hidden-modal");
    }
  };

  const saveBookClicked = (e) => {
    e.preventDefault();
    if (addBookState === "modal hidden-modal") {
      setAddBookState("modal");
    } else if (addBookState === "modal") {
      setAddBookState("modal hidden-modal");
      alert("Data changes saved successfully!");
    }
  };

  // Delete Book
  const [deleteBookState, setDeleteBookState] = useState(
    "delete-modal hidden-modal"
  );
  const [statusState, setStatusState] = useState("deleted");

  const deleteBookClicked = (e) => {
    e.preventDefault();
    if (deleteBookState === "delete-modal hidden-modal") {
      swal("Are you sure you want to delete this data?", {
        buttons: {
          cancel: "No",
          catch: {
            text: "Yes",
            value: "catch",
            className: "swal-yes",
          },
        },
      }).then((value) => {
        switch (value) {
          case "catch":
            setDeleteBookState("delete-modal");
            break;

          default:
            setDeleteBookState("delete-modal hidden-modal");
        }
      });
    } else if (deleteBookState === "delete-modal") {
      setDeleteBookState("delete-modal hidden-modal");
    }
  };

  //Borrow Clicked
  const borrowClicked = (e) => {
    e.preventDefault();
    if (deleteBookState === "delete-modal hidden-modal") {
      if (firstMatch.bookStatus === "Available") {
        swal("Are you sure you want to borrow this book?", {
          buttons: {
            cancel: "No",
            catch: {
              text: "Yes",
              value: "catch",
              className: "swal-yes",
            },
          },
        }).then((value) => {
          switch (value) {
            case "catch":
              setDeleteBookState("delete-modal");
              setStatusState("borrowed");
              break;

            default:
              setDeleteBookState("delete-modal hidden-modal");
          }
        });
      }
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
          statusStyle={firstMatch.bookStatus}
        />
        <Button
          statusStyle={firstMatch.bookStatus}
          buttonClicked={borrowClicked}
        />
      </div>

      <Modal
        modalClicked={addBookClicked}
        modalSaveClicked={saveBookClicked}
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
        status={statusState}
      />
    </div>
  );
};

export default Content;
