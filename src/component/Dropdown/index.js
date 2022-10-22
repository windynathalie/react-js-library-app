import React from "react";
import { Link } from "react-router-dom";
import "../../styles/component/dropdown.css";

const Dropdown = (props) => {
  const { dropdownCLicked, dropdownName, dropdownState } = props;
  return (
    <div className="className">
      <button onClick={dropdownCLicked} className="categories-p">
        {dropdownName}
      </button>
      <div className="dropdown">
        <button className="dropbtn" onClick={dropdownCLicked}>
          <i className="fa fa-caret-down all-time-dropdown dropbtn"></i>
        </button>
        <div id="myDropdown" className={dropdownState}>
          <Link to={"/home"}>Link 1</Link>
          <Link to={"/home"}>Link 2</Link>
          <Link to={"/home"}>Link 3</Link>
        </div>
      </div>
    </div>
  );
};
export default Dropdown;
