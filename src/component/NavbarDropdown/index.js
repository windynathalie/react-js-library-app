import React from "react";
import "../../styles/component/navbar-dropdown.css";

const NavbarDropdown = (props) => {
  const { iconClassName, name } = props;
  return (
    <button className="card-navbar-type">
      <div className="card-navbar-wrap">
        <i className={iconClassName}></i>
        <p>{name}</p>
      </div>
    </button>
  );
};

export default NavbarDropdown;
