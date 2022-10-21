import React, { useState } from "react";
import "../../styles/component/navbar.css";
import NavbarLogo from "../../image/bookshelf-logo.png";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const { hamburgerNavbarClicked, hamburgerNavbarState } = props;
  const [dropdownState, setDropdownState] = useState("dropdown-content");
  const [dropdownState2, setDropdownState2] = useState("dropdown-content2");

  const dropdownClicked = (e) => {
    e.preventDefault();
    if (dropdownState === "dropdown-content") {
      setDropdownState("dropdown-content show");
      setDropdownState2("dropdown-content2");
    } else if (dropdownState === "dropdown-content show") {
      setDropdownState("dropdown-content");
    }
  };

  const dropdownClicked2 = (e) => {
    e.preventDefault();
    if (dropdownState2 === "dropdown-content2") {
      setDropdownState2("dropdown-content2 show");
      setDropdownState("dropdown-content");
    } else if (dropdownState2 === "dropdown-content2 show") {
      setDropdownState2("dropdown-content2");
    }
  };

  return (
    <div className="carousel-container">
      <div className={hamburgerNavbarState}>
        <button onClick={hamburgerNavbarClicked}>
          <i className="fa fa-bars"></i>
        </button>
      </div>
      <div className="dropdown">
        <div className="hover"></div>
        <div className="categories">
          <button onClick={(e) => dropdownClicked(e)} className="categories-p">
            All Categories
          </button>
          <div className="dropdown">
            <button className="dropbtn" onClick={(e) => dropdownClicked(e)}>
              <i className="fa fa-caret-down all-time-dropdown dropbtn"></i>
            </button>
            <div id="myDropdown" className={dropdownState}>
              <Link to={"/home"}>Link 1</Link>
              <Link to={"/home"}>Link 2</Link>
              <Link to={"/home"}>Link 3</Link>
            </div>
          </div>
        </div>
        <div className="all-time">
          <button onClick={(e) => dropdownClicked2(e)}>All Time</button>
          <div className="dropdown">
            <button
              className="dropbtn btns"
              onClick={(e) => dropdownClicked2(e)}
            >
              <i className="fa fa-caret-down all-time-dropdown dropbtn"></i>
            </button>
            <div id="myDropdown2" className={dropdownState2}>
              <Link to={"/home"}>Link 1</Link>
              <Link to={"/home"}>Link 2</Link>
              <Link to={"/home"}>Link 3</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="search-box">
        <button className="button-search" id="button-search">
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
        <input
          onfocusout="onFocusOutForm('search')"
          type="text"
          placeholder="Search Book"
          name="search"
          id="search"
        />
      </div>
      <div className="logo-side">
        <img src={NavbarLogo} alt="logo" />
        <p>Library</p>
      </div>
      <div className="logo-side-responsive">
        <img src={NavbarLogo} alt="logo" />
      </div>
    </div>
  );
};

export default Navbar;
