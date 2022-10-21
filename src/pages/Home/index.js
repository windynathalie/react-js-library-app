import React, { useState } from "react";

import Navbar from "../../component/Navbar";
import Gallery from "../../component/Gallery";
import Modal from "../../component/Modal";
import Sidebar from "../../component/Sidebar";
import Card from "../../component/Card";

import "../../styles/primary/primary.css";
import "../../styles/pages/home.css";

import { contentCard } from "../../data";

// Sidebar Navbar
const Home = () => {
  const [sidebarState, setSidebarState] = useState("left-side-carousel");
  const [hamburgerNavbarState, setHamburgerNavbarState] = useState(
    "hamburger-navbar hidden"
  );

  const hamburgerClicked = (e) => {
    e.preventDefault();
    if (sidebarState === "left-side-carousel") {
      setSidebarState("remove-sidebar");
      setHamburgerNavbarState("hamburger-navbar");
    } else if (sidebarState === "remove-sidebar") {
      setSidebarState("left-side-carousel");
      setHamburgerNavbarState("hamburger-navbar hidden");
    }
  };

  // Add Book
  const [addBookState, setAddBookState] = useState("modal hidden-modal");
  const addBookClicked = (e) => {
    e.preventDefault();
    if (addBookState === "modal hidden-modal") {
      setAddBookState("modal");
    } else if (addBookState === "modal") {
      setAddBookState("modal hidden-modal");
    }
  };

  return (
    <div className="container-modal">
      <div className="container-carousel">
        <Sidebar
          hamburgerSidebarClicked={hamburgerClicked}
          sidebarState={sidebarState}
          modalClicked={addBookClicked}
        />
        <div className="right-side-carousel">
          <Navbar
            hamburgerNavbarClicked={hamburgerClicked}
            hamburgerNavbarState={hamburgerNavbarState}
          />
          <Gallery />

          <div className="card">
            <h5 className="list-title">List Book</h5>
            <div className="book-card">
              {contentCard.map((content) => {
                return (
                  <Card
                    bookId={content.bookId}
                    bookTitle={content.bookTitle}
                    bookImage={content.bookImage}
                    bookParagraph={content.bookParagraph}
                  />
                );
              })}
            </div>
          </div>
        </div>
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
        modalPlaceholderItem1="Url Image..."
        modalPlaceholderItem2="Title..."
        modalPlaceholderTextArea="Description..."
      />
    </div>
  );
};

export default Home;
