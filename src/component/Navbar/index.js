import React, { useState } from "react";
import "../../styles/component/navbar.css";
import NavbarLogo from "../../image/bookshelf-logo.png";
import Dropdown from "../Dropdown";
import SearchBox from "../SearchBox";

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
        <Dropdown
          dropdownCLicked={(e) => dropdownClicked(e)}
          dropdownName="All Categories"
          dropdownState={dropdownState}
        />
        <Dropdown
          dropdownCLicked={(e) => dropdownClicked2(e)}
          dropdownName="All Time"
          dropdownState={dropdownState2}
        />
      </div>

      <SearchBox />

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
