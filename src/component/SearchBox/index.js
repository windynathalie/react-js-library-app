import React from "react";
import "../../styles/component/search-box.css";

const SearchBox = () => {
  return (
    <div className="search-box">
      <button className="button-search" id="button-search">
        <i className="fa fa-search" aria-hidden="true"></i>
      </button>
      <input type="text" placeholder="Search Book" name="search" id="search" />
    </div>
  );
};

export default SearchBox;
