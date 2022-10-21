import React from "react";
import "../../styles/primary/primary.css";
import "../../styles/layouts/login-register.css";
import image from "../../image/login-image.jpg";

const LoginRegisterLayout = (props) => {
  const { children } = props;
  return (
    <div className="container">
      <div className="left-side">
        <div className="left-side-image">
          <img src={image} alt="" />
        </div>
        <div className="background-h1">
          <h2 className="line__1">Book is a window</h2>
          <h2 className="line__2">to the World</h2>
        </div>
        <p>Photo by Jon Tyson on Unsplash</p>
      </div>
      <div className="right-side">{children}</div>
    </div>
  );
};

export default LoginRegisterLayout;
