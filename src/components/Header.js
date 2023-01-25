import React from "react";
import "./Header.css";

const Header = ({ openSidebar }) => {
  return (
    <div className="header">
      <div className="burger" onClick={openSidebar}>
        <i className="ri-arrow-right-line"></i>
      </div>
      <div className="title"></div>
    </div>
  );
};

export default Header;
