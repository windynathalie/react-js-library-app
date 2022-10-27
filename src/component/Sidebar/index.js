// import React, { useState } from "react";
import "../../styles/component/sidebar.css";
import ProfileSidebar from "../../image/profile-navbar.png";
import React from "react";

const Sidebar = (props) => {
  const { hamburgerSidebarClicked, sidebarState, modalClicked, logoutClicked } =
    props;
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
          <button onClick={logoutClicked} className="signout">
            <i className="fa fa-sign-out" aria-hidden="true">
              <p>Logout</p>
            </i>
          </button>
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
