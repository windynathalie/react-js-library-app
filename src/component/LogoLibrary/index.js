import React from "react";
import LogoImage from "../../image/bookshelf-logo-white.png";
import "../../styles/component/logo-library.css";

const LogoLibrary = () => {
  return (
    <div className="logo-library">
      <img src={LogoImage} alt="logo" />
    </div>
  );
};

export default LogoLibrary;
