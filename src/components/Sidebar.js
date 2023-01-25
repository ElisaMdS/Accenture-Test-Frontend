import React from "react";
import "./Sidebar.css";

const Sidebar = ({ sidebar, closeSidebar }) => {
  return (
    <div className={sidebar ? "sidebar sidebar--open" : "sidebar"}>
      <li>
        <i className="ri-home-line"></i> Teste
      </li>
      <li>
        <i className="ri-shopping-cart-line"></i> Products
      </li>
      <li>
        <i className="ri-newspaper-line"></i> Career
      </li>
      <li>
        <i className="ri-phone-line"></i> Contact Us
      </li>
      <li>
        <i className="ri-information-line"></i> About us
      </li>
      <li onClick={closeSidebar}>
        <i className="ri-arrow-left-line"></i>
      </li>
    </div>
  );
};

export default Sidebar;
