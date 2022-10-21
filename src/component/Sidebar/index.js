// import React, { useState } from "react";
import "../../styles/component/sidebar.css";
import ProfileSidebar from "../../image/profile-navbar.png";
import { Link } from "react-router-dom";
import React from "react";

const Sidebar = (props) => {
  const { hamburgerSidebarClicked, sidebarState, modalClicked } = props;
  return (
    <div className={sidebarState}>
      <div className="sidebar">
        <div className="hamburger active">
          <button onClick={hamburgerSidebarClicked}>
            {" "}
            <i className="fa fa-bars"></i>
          </button>
        </div>

        <div className="profil">
          <img src={ProfileSidebar} alt="" />
          <p className="profile-name">Niki Zefanya</p>
          <Link to={"/"}>
            <button className="signout">
              <i className="fa fa-sign-out" aria-hidden="true">
                <p>Logout</p>
              </i>
            </button>
          </Link>
        </div>

        <div className="menu-sidebar">
          <button>Explore</button>
          <button>History</button>
          <button onClick={modalClicked}>Add Book</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
